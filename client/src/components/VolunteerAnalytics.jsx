import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';
import axios from "axios";
import './VolunteerAnalytics.css';
import Navbar from "./Navbar";

const VolunteerAnalytics = () => {

    const [volun, setVolun] = useState([]);
    const getVolun = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/authAdmin/approvedvolunteers");
            console.log(data);
            setVolun(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getVolun();
    }, []);

    // Extract location and expertise data from volunteerData
    const locations = volun.map((volunteer) => volunteer.location);
    const expertise = volun.reduce(
        (acc, volunteer) => [...acc, ...volunteer.expertise],
        []
    );

    // Count occurrences of each location and expertise category
    const locationCount = countOccurrences(locations);
    const expertiseCount = countOccurrences(expertise);

    // Helper function to count occurrences of an array
    function countOccurrences(array) {
        return array.reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc;
        }, {});
    }

    // Prepare data for bar chart (location statistics)
    const locationData = Object.entries(locationCount).map(([location, count]) => [location, count]);

    // Prepare data for pie chart (expertise statistics)
    const expertiseData = Object.entries(expertiseCount).map(([expertise, count]) => [expertise, count]);

    return (
        <div>
            <Navbar/>
        <div className="analytics-container">
            <br />
            <h2 style={{textAlign: 'center'}}>Volunteer Analytics</h2>
            <div className="chart">
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[['Location', 'Count'], ...locationData]}
                    options={{
                        title: 'Location Statistics',
                        backgroundColor: '#FFCC00', // Yellow
                    }}
                />
            </div>
            <div className="chart">
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[['Expertise', 'Count'], ...expertiseData]}
                    options={{
                        title: 'Expertise Statistics',
                        backgroundColor: '#FFCC00', // Yellow
                    }}
                />
            </div>
            </div>
        </div>
    );
};

export default VolunteerAnalytics;