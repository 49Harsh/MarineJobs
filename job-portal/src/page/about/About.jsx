import React from 'react';
import Footer from '../LandingPage/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-20 text-center"
        >
          About Mahadeva Shipping
        </motion.h1>
        
        {/* Common section styling */}
        <div className="space-y-24"> {/* Increased gap between sections */}
          {/* About Section - Image Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-stretch gap-12" // Changed to items-stretch
          >
            <div className="lg:w-1/2 lg:min-h-[500px]"> {/* Set minimum height */}
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src="/ship-2.jpg" 
                  alt="Maritime Operations" 
                  className="relative rounded-2xl w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col justify-center"> {/* Added flex and justify-center */}
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-gray-700">
                  In 2010, Mahadeva Shipping & Management Pvt. 
                  Ltd was established through successful in crew manning by 
                  Company’s Directors efforts and all staff of Mahadeva Shipping & 
                  Management Pvt. Ltd. Pre mains actively involved in the day to day 
                  operations of the company activity of crewing and other business. Mahadeva 
                  Shipping & Management Pvt. Ltd. firmly believes in “people”, “Leadership” and “Technical Excellence” as the foundation of reliable and effective 
                  service. As a result, the group has grown steadily over the years and been rewarded with ever increasing employee loyalty. 
                  In selection of both sea and shore based staff, Mahadeva Shipping & Management Pvt. Ltd maintains an industry leading standard of recruitment and training; developing staff in a 
                  friendly, inter-active working environment, geared towards continuous improvement.
                  Whilst providing complete crews for Ship operators / Owners / Managers fleet of vessels under our Crewing Agent as they are left almost entirely 
                  absent from the picture. Most important, safety always comes first. We take responsibility for the environment and our surroundings because we want to protect our planet for future generations. Responsibility also means honesty and 
                  trustworthiness. We expect all our people to do right thing and never to accept unethical or questionable business practices. We manage significant values on behalf of our customers. We take responsibility for the job being done in a professional, 
                  cost-effective manner that preserves their assets and reputation. We also guarantee first-class training for our employees.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Section - Image Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row-reverse items-stretch gap-12"
          >
            <div className="lg:w-1/2 lg:min-h-[500px]">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src="/ship-2.jpg" 
                  alt="Our Mission" 
                  className="relative rounded-2xl w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-gray-700">
                  "To be a global maritime services provider, through a principal value based approach to our customer, and by bringing together a diverse cross-section of people from different aspects and united in purpose while striving for harmony in elements through ingenuity of human endeavour”. We want to be a long term partners for our customers, a home for our people and to make a difference in the community. We don’t see any contradiction in running a healthy business but at the same time being socially responsible.
                  We want to improve people’s lives. In the countries where we work, we are a provider for our employees, their families and the local society. We provide challenging work and excellent career prospects for our people, but we also want it to be fun. Ultimately, our success is our customer’s success. As long-term partners we work closely with them and strive for innovation and improvements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Section - Image Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-stretch gap-12"
          >
            <div className="lg:w-1/2 lg:min-h-[500px]">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src="/ship-2.jpg" 
                  alt="Our Vision" 
                  className="relative rounded-2xl w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-gray-700">
                  Company is dedicated to achieve its corporate vision to exceed the customer’s expectations, to deliver exceptional values, and to impart lasting values of integrity, loyalty, and professionalism through the attributes of: Service Harmony Achievement Responsibility Enthusiasm. We know that our entire existence is depending on that we have customers who find our services better than the competition. We want to be an important partner for our customers, making sure that services we provide are adding value for our customers. We simply want to give that little bit extra that put our customers ahead of their competition. We aim to be a key partner for our customers and that our services add significant value for them. We want to give that little bit extra that’ll put them ahead of their game.
                  Responsibility: We believe that we will continue to grow and strengthen our position as long as we always aim to deliver the best. Because when it comes down to it: It’s all About People!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="space-y-3">
            <p className="flex items-start">
              <span className="font-semibold min-w-[100px]">Address:</span>
              <span>M/S Sairama Real Estate, Shop No.6, Plot 3A, Sector 2, Kharghar Navi Mumbai, Maharashtra, India 410210.</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold min-w-[100px]">Phone:</span>
              <a href="tel:+912279622990" className="text-blue-600 hover:text-blue-800">+91 22 79622990</a>
            </p>
            <p className="flex items-center">
              <span className="font-semibold min-w-[100px]">Email:</span>
              <a href="mailto:info@mahadevashipping.com" className="text-blue-600 hover:text-blue-800">info@mahadevashipping.com</a>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;