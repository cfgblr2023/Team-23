import React, {useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Form, Input, message } from "antd";

function VolunteersRegistration(){

    const [eventName, setEventname] = useState({
        event: "",
        email: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEventname(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    const onfinishHandler = async (event) => {
        try {
            const res = await axios.post("http://localhost:8080/api/v1/authVoln/applyforevent", eventName);
            if (res.data.success) {
                message.success("Login Successfully");
                // navigate("/Management");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            message.error("something went wrong");
        }
    };


    return <div>
        <Navbar />
        <input onChange={handleChange} type = "text" name="event" placeholder = "Enter Event name" />
        <input onChange={handleChange} type = "text" name="email" placeholder = "Enter email id" />
        <button onClick = {onfinishHandler}>Submit</button>
    </div>

}

export default VolunteersRegistration;