import React, { useState } from 'react';
import './login.css';
import Navbar from './Navbar';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic or API call here using name and email
        console.log('Name:', name);
        console.log('Email:', email);
        // Reset the input fields
        setName('');
        setEmail('');
    };

    return (
        <div>
        <Navbar />
        <br></br> <br></br>
        <div className="login-container">
            <h3>To Make The Change!</h3>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <div className='end'>Do you already have the account</div>
            </form>
        </div>
        </div>
    );
};

export default Login;
