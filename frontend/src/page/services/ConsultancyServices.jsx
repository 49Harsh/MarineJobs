import React from 'react';

const ConsultancyServices = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Consultancy Services</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
            In special case to serve better for our Respected Ship Owners, We take care all the require responsibilities and provide 
            complete Ship Operations solutions under one banner through our dedicated Service Partners : Ship Registration and, Certification. Take Over 
            of Ships for Owners, Dry-docking and repair plan Management. Internal / External Audits and Implementation.
            Flag State Inspections, ISM/ ISPS Certification,/ Survey, Vessel Condition Assessment, Pre-Purchase Assessment, Pre/Post, Charter Assessments, Condition Surveys, Pre-finance, Inspections, Bunker, Quantity Surveys and Bunker Investigations.
            </p>
            
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/landing-01.jpg" 
              alt="Consultancy Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyServices;
