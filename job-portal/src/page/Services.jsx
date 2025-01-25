import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Crew Recruitment</h2>
          <p className="text-gray-600">Professional recruitment services for maritime personnel across all ranks and vessel types.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Career Consultation</h2>
          <p className="text-gray-600">Expert guidance for maritime professionals seeking career advancement opportunities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Training Programs</h2>
          <p className="text-gray-600">Specialized training programs to enhance maritime skills and qualifications.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
