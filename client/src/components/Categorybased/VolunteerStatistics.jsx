import React from 'react';
import './VolunteerStatistics.css'


const VolunteerStatistics = () => {

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
        },

    ];

    return (
        <div className="statistics-container">
            <h2>Volunteer Statistics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Expertise</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteerData.map((volunteer, index) => (
                        <tr key={index}>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.phone}</td>
                            <td>{volunteer.location}</td>
                            <td>{volunteer.expertise.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerStatistics;
