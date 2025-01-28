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
          About Run Marine Services Private Limited
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
                Welcome to Run Marine Services, a crewing and manning shipping company based out of Sanpada, Navi Mumbai. We specialize in providing highly skilled and qualified seafarers to the maritime industry worldwide. Our team comprises of experienced professionals with a deep understanding of the shipping industry and a passion for delivering exceptional services to our clients. We have a proven track record of providing reliable and efficient crewing solutions to various types of vessels including bulk carriers, tankers, offshore vessels, and more. At Run Marine, we are committed to ensuring the safety, welfare, and well-being of our seafarers while also providing them with ample opportunities for career growth and development. We take pride in our ability to deliver customized solutions that cater to the unique needs of each of our clients. With a strong focus on quality, safety, and compliance, we aim to be the preferred crewing partner for ship owners and operators worldwide.

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
                Our mission at Run Marine is to provide our clients with highly skilled and qualified seafarers who are committed to safety, efficiency, and professionalism. We aim to exceed our clients' expectations by delivering customized and 
                flexible solutions that cater to their unique needs. We are committed to ensuring the welfare and well-being of our seafarers by providing them with a safe, supportive, and rewarding work environment. We strive to continuously improve 
                our services and processes through innovation,  technology,  and  a  culture  of  continuous  learning.  Our  mission  is  to  be  a  responsible corporate citizen 
                by contributing to the sustainable development of the maritime industry and the communities in which we operate.
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
                Our vision at Run Marine is to be the leading provider of crewing and manning solutions in the maritime industry worldwide. We strive to build long-term relationships with our clients based on trust, integrity, and mutual respect. We envision a future where our seafarers are recognized as skilled professionals who are valued for their contributions to the safe and efficient operation of vessels, and where Run Marine is recognized as a trusted and reliable partner in the shipping industry.
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
              <span>Office No -304, 3rd floor Krishna Govind tower, sector-24
                  Vashi, opp. Sanpada Railway Station, Navi Mumbai-4007005, India.
              </span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold min-w-[100px]">Phone:</span>
              <a href="tel:+912279622990" className="text-blue-600 hover:text-blue-800">+91-8080343416</a>
            </p>
            <p className="flex items-center">
              <span className="font-semibold min-w-[100px]">Email:</span>
              <a href="operations@runmarineservice.com" className="text-blue-600 hover:text-blue-800">operations@runmarineservice.com</a>

              <span className='w-4'>,</span>
              
              <br/>
              <p className="flex items-center">
              {/* <span className="font-semibold min-w-[100px]">Email:</span> */}
              <a href="runmarine507@gmail.com" className="text-blue-600 hover:text-blue-800">runmarine507@gmail.com</a>
            </p>
            </p>
            
           
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;