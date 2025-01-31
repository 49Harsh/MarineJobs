import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Footer from '../LandingPage/Footer';

const ServiceLayout = ({ 
  title, 
  subtitle,
  description, 
  image, 
  points,
  objectives,
  policies,
  mainServices,
  vesselCoverage,
  specializedTeams,
  certifications
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            {subtitle && <h2 className="text-2xl text-gray-600 mb-6">{subtitle}</h2>}
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">{description}</p>
              {points && !mainServices && (
                <ul className="space-y-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src={image}
                alt={title}
                className="relative rounded-2xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Objectives and Policies Section */}
        {(objectives || policies) && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {objectives && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Our Objectives</h3>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {policies && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Our Policies</h3>
                <ul className="space-y-3">
                  {policies.map((policy, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Main Services Section */}
        {mainServices && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Vessel Coverage Section */}
        {vesselCoverage && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Vessel Types We Cover</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vesselCoverage.map((vessel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  {vessel}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Specialized Teams Section */}
        {specializedTeams && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Specialized Teams</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {specializedTeams.map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-semibold mb-4">{team.title}</h4>
                  <ul className="space-y-2">
                    {team.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {certifications && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

ServiceLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
  objectives: PropTypes.arrayOf(PropTypes.string),
  policies: PropTypes.arrayOf(PropTypes.string),
  mainServices: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  })),
  vesselCoverage: PropTypes.arrayOf(PropTypes.string),
  specializedTeams: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
  })),
  certifications: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceLayout;
