import React from 'react';

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Documentation</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The Seafarer's Certification and Documentation (SCD) Department at the Liberian Registry 
              reviews, certifies and documents, the officers & ratings that sail aboard Liberian 
              registered ships.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/landing-03.jpg" 
              alt="Documentation Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
