import React from 'react';
import VolunteerAnalytics from './VolunteerAnalytics';

const AdminPage = () => {
    // Sample volunteer data
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

    return (
        <div>
            {/* Render other admin components */}
            <VolunteerAnalytics volunteerData={volunteerData} />
        </div>
    );
};

export default AdminPage;
