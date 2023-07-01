import React from 'react';
import { Chart } from 'react-google-charts';
import './VolunteerAnalytics.css';
const volunteerData = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        location: 'Location A',
        expertise: ['General Subject', 'Technology Subjects'],
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '9876543210',
        location: 'Location B',
        expertise: ['Fund Raising', 'Managing'],
    }]
const VolunteerAnalytics = ({ volunteerData }) => {
    // Extract location and expertise data from v olunteerData
    const locations = volunteerData?.map((volunteer) => volunteer.location);
    const expertise = volunteerData?.reduce(
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
        <div className="analytics-container">
            <h2>Volunteer Analytics</h2>
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
    );
};

export default VolunteerAnalytics;
