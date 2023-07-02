import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import EventsVolunteer from "./EventsVolunteer.jsx"
function Volunteer() {
    var allEvents = []
    const [events, setEvents] = useState([]);
    const [eventStatus, setEventStatus] = useState({
        Events: "All"
    });
    const getEvents = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/authVoln/getallevents");
            console.log(data.events);
            setEvents(data.events);
        } catch (err) {
            console.error(err.message);
        }
    };

    

    useEffect(() => {
        getEvents();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEventStatus(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    // const length = events.events.length;

    return (
        <div>
            <Navbar />
            <hr />
            {/* <form action="http://localhost:8080/api/v1/authVoln/getallevents" method="get">
                <select name="Events" onChange={handleChange}>
                    <option name="Events" value="All">All</option>
                    <option name="Events" value="Current">Current Events</option>
                    <option value="Upcoming"></option>
                </select>
            </form> */}
            <br />
            
            {   
                events.map((event) => {
                    allEvents.push(
                        <EventsVolunteer
                            name={event.name}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                            noOfvolunteers={event.noofvolunteers}
                            description={event.description}
                        />
                    )
                })
            }
            <div className="container">
                <div className="row" style={{display: "flex", flexDirection:"row"}}>
                    <div className="col" style={{display: "flex", gap: "5rem"}}>{allEvents}</div>
                </div>
            </div>
        </div>
    );
}

export default Volunteer;