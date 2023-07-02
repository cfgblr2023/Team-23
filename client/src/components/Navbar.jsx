import React from "react";
import logo from "./logo.png";
import LogIn from "./LogIn";
function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class = "logo" src={logo} alt="Lamp education" width="30" height="24" />
          </a>
          <div class="d-flex">
            <a class = "navbar-link" href = "/">Home </a> &nbsp; | &nbsp;
            <a class = "navbar-link" href = "/Management">Management team</a> &nbsp; | &nbsp;
            <a class = "navbar-link" href = "/LogIn">Log In </a> &nbsp; | &nbsp;
            <a class = "navbar-link" href = "/SignUp">Sign Up</a>&nbsp; | &nbsp;
            <a class = "navbar-link" href = "/Volunteerspage">Volunteer's page</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
