import React, { useState } from 'react';
import './login.css';
import Navbar from './Navbar';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, message } from "antd";

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

    // const navigate = useNavigate();
    // const navigateTo=()=>{
    //     axios.post("http://localhost:8080/api/v1/authAdmin/login",name)
    //     .then(response=>{
    //     alert(response.data.message)
    //     navigate("/Management");
    // })
    // }

    const navigate = useNavigate();
    const onfinishHandler = async (values) => {
        try {
            const res = await axios.post("http://localhost:8080/api/v1/authAdmin/login", values);
            if (res.data.success) {
                message.success("Login Successfully");
                navigate("/Management");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            message.error("something went wrong");
        }
    };

    return (
        <div>
            <Navbar />
            {/* <br></br> <br></br>
        <div classNameName="login-container">
            <h3>To Make The Change!</h3>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div classNameName="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div classNameName="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button onSubmit={navigateTo} type="submit">Login</button>
                <div classNameName='end'>Do you already have the account</div>
            </form>
        </div> */}

            <div classNameName="form-container ">
                <Form
                    layout="vertical"
                    onFinish={onfinishHandler}
                    classNameName="register-form"
                >
                    <h3 classNameName="text-center">Login From</h3>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to="/register" classNameName="m-2">
                        Not a user Register here
                    </Link>
                    <button classNameName="btn btn-primary" type="submit">
                        Login
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
