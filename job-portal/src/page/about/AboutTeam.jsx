import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from '../LandingPage/Footer';

const AboutTeam = () => {
    const teamMembers = [
        {
          name: 'Mr. Nagaraj P. Somasi',
          role: 'Managing Director',
          image: '/ship-2.jpg'
        },
        {
          name: 'Director – Mr. Gauri Shankar',
          role: 'Director',
          image: '/ship-2.jpg'
        },
        {
          name: 'Capt.Sailesh Kumar Singh',
          role: 'Operational Manager ',
          image: '/ship-2.jpg'
        },
       
      ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/30 to-transparent" />
      
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3 block">
              Our Team
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Leadership Team
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-transparent rounded-full" />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-content-center"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="relative p-10 rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl shadow-blue-900/5 transition duration-300 group-hover:shadow-blue-900/10">
                  {/* Glass Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/80 to-white/30 group-hover:from-white/90 group-hover:to-white/40 transition-colors duration-500" />
                  
                  <div className="relative">
                    {/* Updated Profile Image */}
                    <div className="relative mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-48 h-48 mx-auto aspect-square"
                      >
                        {/* Glow Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center relative">
                      <h3 className="text-2xl text-gray-900 font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium mb-4">
                        {member.role}
                      </p>

                      {/* Social Links */}
                      {/* <div className="flex justify-center gap-3">
                        {[
                          { name: 'LinkedIn', icon: 'IN' },
                          { name: 'Email', icon: '@' }
                        ].map((item, i) => (
                          <button
                            key={i}
                            className="relative px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300"
                          >
                            <span className="text-sm text-gray-600 font-medium group-hover:text-blue-600">
                              {item.icon}
                            </span>
                          </button>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutTeam;
