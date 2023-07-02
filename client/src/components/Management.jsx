import React from "react";
import Navbar from "./Navbar";
import "./management.css";
import VolunteerAnalytics from "./VolunteerAnalytics";
function Management() {
  return (
    <div>
    <Navbar />
    <div id="management-container">
      <h1 class="h-primary center">Lamp Management</h1>
      <div id="management">
        <div class="box">
          <a class="h-secondary center" href="/DisplayVolunteers">
            Volunteer
          </a>
        </div>
        <div class="box">
          <a class="h-secondary center" href="/Volunteer">
            Events
          </a>
        </div>
        <div class="box">
          <a class="h-secondary center" href="/VolunteerAnalytics">
            Volunteer analytics
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Management;
