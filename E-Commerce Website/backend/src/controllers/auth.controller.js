import userModel from '../models/user.model.js';
import { comparePassword, hashPassword } from '../helpers/auth.helper.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        // Validations
        if (!name) {
            return res.send({ message: 'Name is Required' });
        }
        if (!email) {
            return res.send({ message: 'Email is Required' });
        }
        if (!password) {
            return res.send({ message: 'Password is Required' });
        }
        if (!phone) {
            return res.send({ message: 'Phone no is Required' });
        }
        if (!address) {
            return res.send({ message: 'Address is Required' });
        }
        if (!answer) {
            return res.send({ message: 'Answer is Required' });
        }

        // check user
        const exisitingUser = await userModel.findOne({ email: email });

        // exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register please login'
            });
        }

        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword, answer }).save();
        res.status(201).send({
            success: true,
            message: 'User Register Succesfully',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        });
    }
};

// Post Login
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            });
        }
        // check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registerd',
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            });
        }
        // token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).send({
            success: true,
            message: 'login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        });
    }
};

// forgotPasswordController
export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            res.status(400).send({ message: 'Email is required' });
        }
        if (!answer) {
            res.status(400).send({ message: 'Answer is required' });
        }
        if (!newPassword) {
            res.status(400).send({ message: 'New Password is required' });
        }
        // check 
        const user = await userModel.findOne({ email, answer });
        // validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Wrong Email or Password'
            });
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed });
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.send(500).send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

// test controller
export const testController = (req, res) => {
    try {
        res.send('Protected Routes');
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};