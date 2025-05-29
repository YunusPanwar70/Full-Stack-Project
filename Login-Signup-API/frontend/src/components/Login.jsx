import React, { useState } from 'react';
import { login } from '../api/auth';
function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            localStorage.setItem('token', res.data.token);
            setMessage('Login successful');
        } catch (error) {
            setMessage(error.response?.data?.message || error.message || 'Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}
export default Login;