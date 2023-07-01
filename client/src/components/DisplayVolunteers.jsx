import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";

function DisplayVolunteers(props) {
    const [volun, setVolun] = useState([]);
    const getVolun = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/authAdmin/pendingapproval");
            console.log(data);
            setVolun(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getVolun();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Volunteers database</h1>
            <br />
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Expertise</th>
                    <th scope="col">Reason to join</th>
                    <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        volun.map((volun) => (
                            <tr class="table-warning" scope="row">
                                <td>{volun.name}</td>
                                <td>{volun.email}</td>
                                <td>{volun.phone}</td>
                                <td>{volun.expertise}</td>
                                <td>{volun.reason}</td>
                                <td>{volun.location}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default DisplayVolunteers;