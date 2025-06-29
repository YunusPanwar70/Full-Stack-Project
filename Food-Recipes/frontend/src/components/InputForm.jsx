import React, { useState } from 'react';
import axios from 'axios';

function InputForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSignUp, setIsSignUp] = useState();
    const [error, setError] = useState();

    const handleOnSubmit = async () => {
        email.preventDefault();
        let endPoint = (isSignUp) ? 'signUp' : 'login';
        await axios.post(`http://localhost:3000/${endPoint}`, { email, password }).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setIsOpen();
        }).catch((data) => setError(data.response?.data?.error));
    };

    return (
        <>
            <form className='form' onSubmit={handleOnSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" className='input' onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="email" className='input' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>{(isSignUp) ? 'Sign Up' : 'Login'}</button><br /><br />
                {(error != "") && <h6 className='error'>{error}</h6>}<br></br>
                <p onClick={() => setIsSignUp(pre => !pre)}>{(isSignUp) ? "Already have an account" : "Create new account"}</p>
            </form>
        </>
    );
}

export default InputForm;