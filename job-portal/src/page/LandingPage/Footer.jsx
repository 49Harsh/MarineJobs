import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const columns = [
    {
      title: "Company",
      links: [
        "About Us",
        "Leadership Team",
        "Vision & Mission",
        "Contact Us"
      ]
    },
    {
      title: "Our Business",
      links: [
        "Technical Management",
        "Crew Management",
        "Technical Services"
        
      ]
    },
    {
      title: "Vacancies",
      links: [
        "Careers at Sea",
        "Careers on Shore"
      ]
    }
  ];

  return (
    <footer className="bg-[#1a237e] text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and Address Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <img 
              src="/logo.jpg" 
              alt="RUN MARINE SERVICE PVT.LTD" 
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed">
              Office No -304, 3rd floor Krishna,<br />
              Govind tower, sector-24
              Vashi, opp. Sanpada Railway Station,<br />
              Navi Mumbai-400705, India.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5 text-[#1a237e]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin className="h-5 w-5 text-[#1a237e]" />
              </a>
            </div>
          </motion.div>

          {/* Menu Columns */}
          {columns.map((column, index) => (
            <motion.div 
              key={column.title}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <span>-</span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-4 border-t border-blue-400"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-300">
            <p>Copyright © 2025 | All rights reserved | Run Marine Services Pvt. Ltd.</p>
            {/* <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div> */}
            <p className="text-xs">Designed by HY</p>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;