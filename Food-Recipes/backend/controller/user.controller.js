import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userSignUp = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password is required' });
    }
    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: 'Email is already exists' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email, password: hashPassword
    });
    let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token, user: newUser });
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(200).json({ message: 'Email and Password is required' });
    }
    let user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
        return res.status(200).json({ token, user });
    } else {
        return res.status(400).json({ errorl: 'Invalid Credientials' });
    }
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.param.id);
    res.json({ email: user.email });
};