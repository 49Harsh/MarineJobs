import React from 'react';

const AboutTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO',
      bio: '20+ years of experience in maritime operations and recruitment.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Recruitment',
      bio: 'Specialist in crew management and maritime HR.',
    },
    {
      name: 'Michael Chen',
      position: 'Technical Director',
      bio: 'Former chief engineer with extensive technical expertise.',
    },
    {
      name: 'Emily Williams',
      position: 'Client Relations Manager',
      bio: 'Dedicated to providing exceptional service to our clients.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-blue-600 mb-3">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
