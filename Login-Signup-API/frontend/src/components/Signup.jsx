import React, { useState } from 'react';
import { signup } from '../api/auth';

function Signup() {
    const [formData, setFromData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signup(formData);
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.respone?.data?.error || 'Signup failed');
        }
    };


    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                <button type="submit">Signup</button>
            </form>
            <p>{message}</p>
        </div>
    );
}
export default Signup;