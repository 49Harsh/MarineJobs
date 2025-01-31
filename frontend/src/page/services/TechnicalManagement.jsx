import React from 'react';
import { Check } from 'lucide-react';

const TechnicalManagement = () => {
  const services = [
    "Technical support",
    "Store and Purchase",
    "Operation",
    "Regular maintenance/ Performance report",
    "Maintenance and Repair",
    "Dry-docking",
    "ISM Compliance / Safety and Quality Assurance",
    "Specialization and expertise in chemical tankers",
    "Open hatch bulk carrier operations",
    "Panama bulk carrier handling",
    "Container vessel management",
    "Car carrier operations"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Existing top section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <div className="lg:w-1/2">
            {/* left side */}
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Technical Management</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              As a Progressive and Proactive Ship Manager, Run Marine Service Pvt. Ltd. 
              has under its management all types of ships (Reefer, Chemical Tankers and Bulk carriers). 
              The Company draws on its pool of experienced Manpower and Resources, which are at its 
              disposal both ashore and afloat.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Ships are inspected at regular intervals of three months by the technical superintendent 
              to ensure a very close follow-up of shipboard activities. Furthermore, computer based 
              systems are used to monitor vessel performance.
            </p>
            <p className='mb-6 text-gray-700 leading-relaxed'>
              Moreover, Run Marine Service Pvt. Ltd. has the flexibility to meet all owner's needs for periodic technical and accounting reports. We are geared to provide you with any information you require - at any time
            </p>
          </div>
          {/* right side */}
          <div className="lg:w-1/2">
            <img 
              src="/ship-2.jpg" 
              alt="Technical Management Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>

        {/* New services grid section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-2 p-3 rounded-lg hover:bg-gray-50">
                <Check className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalManagement;
