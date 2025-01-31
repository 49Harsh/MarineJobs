import React from 'react';

const CommercialManagement = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Commercial Management</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our Trading help clients to run & to transform their front, middle and back-office 
              trading operations. We provide buy-side, sell-side and market infrastructure firms 
              with a full-service offering, including systems integration and technology consulting 
              services, to assist in delivering high performance trading and settlement capabilities 
              across all asset classes.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              This includes strategy, architecture design, operating model work, process improvement. 
              Commercial management team constitutes embedded professionals & domain experts with 
              extensive domestic & international experience in ship chartering & brokering.
            </p>
           
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/ship-2.jpg" 
              alt="Commercial Management Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialManagement;
