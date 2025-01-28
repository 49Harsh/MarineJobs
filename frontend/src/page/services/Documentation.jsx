import React from 'react';
import ServiceLayout from './ServiceLayout';

const Documentation = () => {
  const serviceData = {
    title: "Documentation Services",
    description: "Comprehensive maritime documentation services ensuring compliance and efficient vessel operations.",
    image: "/landing-03.jpg",
    points: [
      "Vessel certification management",
      "Crew documentation processing",
      "Port clearance documentation",
      "Safety documentation maintenance",
      "Regulatory compliance documentation",
      "Charter party documentation",
      "Insurance documentation",
      "Digital document management solutions"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default Documentation;
