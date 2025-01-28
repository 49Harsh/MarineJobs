import React from 'react';
import ServiceLayout from './ServiceLayout';

const ConsultancyServices = () => {
  const serviceData = {
    title: "Consultancy Services",
    description: "Expert maritime consultancy services providing strategic guidance and solutions for shipping operations and management.",
    image: "/landing-01.jpg",
    points: [
      "Maritime risk assessment and management",
      "Operational efficiency optimization",
      "Safety management system development",
      "Environmental compliance consulting",
      "Maritime training and development",
      "Port and terminal operations consulting",
      "Project management services",
      "Strategic planning and advisory"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default ConsultancyServices;
