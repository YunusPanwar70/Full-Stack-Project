import React, { useState } from 'react';
import './login.css';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibilty = () => {
        setShowPassword(prev => !prev);
    };
    return (
        <div className="container">
            <form>
                <label htmlFor="Enter your email">Enter Your Email</label>
                <input type="gmail" name="" id="" />
                <label htmlFor="Enter your Password">Password</label>
                <div>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" />
                    <button type='button' onClick={togglePasswordVisibilty}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
            </form>
        </div>
    );
}
export default Login;