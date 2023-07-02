import React, { useState } from 'react';
import './VolunteerManagement.css';

const VolunteerManagement = () => {
    const [volunteers, setVolunteers] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phoneNumber: '1234567890',
            verified: true,
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            phoneNumber: '9876543210',
            verified: false,
        },
        // Add more dummy data as needed
    ]);

    const handleApprove = (volunteerId) => {
        // Handle the approval logic here (e.g., update the volunteer's verified status in the state or make an API call)
        console.log(`Approving volunteer with ID: ${volunteerId}`);
    };

    return (
        <div className="volunteer-management">
            <h2>Volunteer Management</h2>
            <table className="volunteer-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Verification Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map((volunteer) => (
                        <tr key={volunteer.id}>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.phoneNumber}</td>
                            <td>{volunteer.verified ? 'Approved' : 'Pending'}</td>
                            <td>
                                {!volunteer.verified && (
                                    <button onClick={() => handleApprove(volunteer.id)}>Approve</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerManagement;
