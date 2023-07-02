import React from "react";
import testimg from "./test.jpg";

function EventsVolunteer(props) 
{
    return(
        <div>
            <div className="eventsCard">
                <img className="eventCardImage" src={testimg} alt="img" />
                <div class="eventCardInfo">
                    <p>Name: {props.name}</p>
                    <p>Location: {props.location}</p>
                    <p>Date: {props.date}</p>
                    <p>Time: {props.time}</p>
                    <p>Number of Volunteer: {props.noofvolunteers}</p>
                    <p>Description: {props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default EventsVolunteer;