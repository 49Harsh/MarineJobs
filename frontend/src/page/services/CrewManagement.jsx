import React from 'react';
import ServiceLayout from './ServiceLayout';

const CrewManagement = () => {
  const serviceData = {
    title: "Crew Management",
    description: "We provide comprehensive crew management services ensuring vessels are staffed with qualified and experienced seafarers. Our crew management solutions are designed to optimize vessel operations while maintaining the highest standards of safety and efficiency.",
    image: "/landing-02.jpg",
    points: [
      "Complete crew planning and deployment",
      "Certification and documentation management",
      "Crew training and development programs",
      "Performance evaluation and monitoring",
      "Payroll and benefits administration",
      "24/7 crew support services",
      "Medical examination coordination",
      "Travel arrangements and logistics"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default CrewManagement;
