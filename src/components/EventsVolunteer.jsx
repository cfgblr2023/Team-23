import React from "react";
import "../styles.css"
import testimg from "../test.jpg";

function EventsVolunteer(props) 
{
    return(
        <div>
            <div className="eventsCard">
                <img className="eventCardImage" src={testimg} alt="img" />
                <div class="eventCardInfo">
                    <p>Name</p>
                    <p>Location</p>
                    <p>Date</p>
                    <p>Time</p>
                    <button type="button" class="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}

export default EventsVolunteer;