import React from 'react';
import ServiceLayout from './ServiceLayout';

const CrewManagement = () => {
  const serviceData = {
    title: "Crew Management Services",
    subtitle: "End-to-End Maritime Staffing Solutions",
    description: "As a leading maritime crew management service provider, we specialize in delivering comprehensive manning solutions for all vessel types. Our commitment to excellence ensures that all personnel are STCW95 & 2010 certified, medically fit, and possess extensive experience in their respective roles.",
    image: "/landing-02.jpg",
    objectives: [
      "Provide top-tier crew manning services",
      "Ensure compliance with international maritime standards",
      "Maintain highest recruitment and selection standards",
      "Deliver cost-effective staffing solutions",
      "Guarantee quick response to client requirements"
    ],
    policies: [
      "Safety-first approach in all operations",
      "Excellence in service delivery",
      "Full compliance with national and international standards",
      "Cost-efficient management solutions",
      "Quality assurance in recruitment"
    ],
    mainServices: [
      {
        title: "Core Crew Management",
        points: [
          "Complete crew planning and deployment",
          "Officers to ratings recruitment for all vessel types",
          "Specialized personnel for technical operations",
          "Emergency crew replacement services",
          "Global crew logistics management"
        ]
      },
      {
        title: "Crew Development & Compliance",
        points: [
          "STCW95 & 2010 certification verification",
          "Professional development programs",
          "Computer-based competency assessments",
          "English proficiency testing",
          "Psychological evaluation services"
        ]
      },
      {
        title: "Administrative Support",
        points: [
          "Documentation and certification management",
          "Travel arrangements and visa assistance",
          "Payroll and benefits administration",
          "Medical examination coordination",
          "Insurance coverage management"
        ]
      }
    ],
    vesselCoverage: [
      "Oil Product Tankers",
      "Chemical Tankers",
      "LPG Carriers",
      "Bulk Carriers",
      "Container Ships",
      "Passenger Vessels",
      "Livestock Carriers",
      "Reefer Vessels",
      "OSV and Tugs",
      "General Cargo Ships"
    ],
    specializedTeams: [
      {
        title: "Technical Teams",
        services: [
          "Repair Party Teams",
          "Dry Docking Specialists",
          "Tank Cleaning Experts",
          "Welders and Fitters",
          "Workshop Technical Staff"
        ]
      },
      {
        title: "Additional Services",
        services: [
          "Offshore Support Teams",
          "Cadet Training Programs",
          "Project-specific Crew Assembly",
          "Vessel Delivery Crews",
          "Emergency Response Teams"
        ]
      }
    ],
    certifications: [
      "STCW95 & 2010 Compliance",
      "ISO 9001:2015",
      "MLC 2006",
      "ISM Code",
      "ISPS Code"
    ]
  };

  return <ServiceLayout {...serviceData} />;
};

export default CrewManagement;
