import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../LandingPage/Footer';

const ServiceLayout = ({ title, description, image, points }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">{description}</p>
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
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
      </div>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
