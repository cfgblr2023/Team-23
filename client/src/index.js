// import React from "react"
// import App from "./components/App"


// ReactDom.render(<App />, document.getElementById("root"))

import React from 'react';
import ReactDom from "react-dom"
import { BrowserRouter as Router, Routes, 
  Route, Redirect,Switch} from "react-router-dom";
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';
import KnowMoreAboutUs from './components/KnowMoreAboutUs';
import FundRaiser from './components/FundRaiser';
import LogIn from './components/LogIn';
import Signup from './components/SignUp';
import Management from './components/Management';
import VolunteerAnalytics from './components/VolunteerAnalytics';
import DisplayVolunteers from './components/DisplayVolunteers';
import Volunteer from './components/Volunteer';
import EventsVolunteer from "./components/EventsVolunteer"


ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path = "/KnowMoreAboutUs" element = {<KnowMoreAboutUs />} ></Route>
        <Route path = "/FundRaiser" element = {<FundRaiser />}></Route>
        <Route path = "/LogIn" element = {<LogIn />}></Route>
        <Route path = "/SignUp" element = {<Signup />}></Route>
        <Route path = "/Management" element = {<Management />}></Route>
        <Route path = "/VolunteerAnalytics" element = {<VolunteerAnalytics />}></Route>
        <Route path = "/DisplayVolunteers" element = {<DisplayVolunteers />}></Route>
        <Route path = "/Volunteer" element = {<Volunteer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
