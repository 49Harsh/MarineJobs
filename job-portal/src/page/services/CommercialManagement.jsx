import React from 'react';
import ServiceLayout from './ServiceLayout';

const CommercialManagement = () => {
  const serviceData = {
    title: "Commercial Management",
    description: "Comprehensive commercial management services for optimal vessel operations and business performance.",
    image: "/ship-2.jpg",
    points: [
      "Charter party negotiations",
      "Freight and hire management",
      "Vessel performance monitoring",
      "Market analysis and reporting",
      "Contract management",
      "Claims handling",
      "Cost control and optimization",
      "Business strategy development"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default CommercialManagement;
