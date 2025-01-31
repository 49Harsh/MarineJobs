import React from 'react';

const TechnicalManagement = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Technical Management</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              As a Progressive and Proactive Ship Manager, Mahadeva Shipping & Management Pvt. Ltd. 
              has under its management all types of ships (Reefer, Chemical Tankers and Bulk carriers). 
              The Company draws on its pool of experienced Manpower and Resources, which are at its 
              disposal both ashore and afloat.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Ships are inspected at regular intervals of three months by the technical superintendent 
              to ensure a very close follow-up of shipboard activities. Furthermore, computer based 
              systems are used to monitor vessel performance.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/ship-2.jpg" 
              alt="Technical Management Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalManagement;
