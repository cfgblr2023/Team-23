import React from "react"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, 
    Route, Redirect,Switch} from "react-router-dom";
import KnowMoreAboutUs from "./KnowMoreAboutUs";
import FundRaiser from "./FundRaiser"
import Homecard from "./HomeCard"
import LogIn from "./LogIn"
import Signup from "./SignUp";
import Management from "./Management";
import VolunteerAnalytics from "./VolunteerAnalytics";
import DisplayVolunteers from "./DisplayVolunteers";
import Volunteer from "./Volunteer";

function App(){
    return <div>
    <Routes> 
          <Route path="/" element={<Homecard />} />
          <Route path="/KnowMoreAboutUs" element={KnowMoreAboutUs} />
          <Route path = "/FundRaiser" element = {FundRaiser} />
          <Route path = "/LogIn" elemet = {LogIn} />
          <Route path = "/SignUp" element = {Signup} />
          <Route path = "/Management" element = {Management} />
          <Route path = "/VolunteerAnalytics" element = {VolunteerAnalytics} />
          <Route path = "/DisplayVolunteers" element = {DisplayVolunteers} />
          <Route path = "/Volunteer" element = {Volunteer} />

        </Routes>
    </div>
}

export default App