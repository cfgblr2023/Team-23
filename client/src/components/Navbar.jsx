import React from "react";
import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img class="logo" src={logo} alt="Lamp education" width="30" height="24" />
                    </a>
                    <div class="d-flex">
                        <a class="navbar-link" href="#">Log In </a> &nbsp; | &nbsp;
                        <a class="navbar-link" href="#">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;