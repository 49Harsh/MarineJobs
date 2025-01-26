import React from 'react';
import ServiceLayout from './ServiceLayout';

const TechnicalManagement = () => {
  const serviceData = {
    title: "Technical Management",
    description: "Our technical management services ensure optimal vessel performance and compliance with international maritime standards.",
    image: "/ship-2.jpg",
    points: [
      "Planned maintenance system implementation",
      "Technical operations oversight",
      "Dry-docking management",
      "Vessel performance optimization",
      "Safety management system maintenance",
      "Equipment repairs and upgrades",
      "Technical audits and inspections",
      "Regulatory compliance management"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default TechnicalManagement;
