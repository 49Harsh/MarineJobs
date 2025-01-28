import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from '../LandingPage/Footer';

const AboutTeam = () => {
    const teamMembers = [
        {
          name: 'Mr. Nagaraj P. Somasi',
          role: 'Managing Director',
          image: '#'
        },
        {
          name: 'Director – Mr. Gauri Shankar',
          role: 'Director',
          image: '#'
        },
        {
          name: 'Capt.Sailesh Kumar Singh',
          role: 'Operational Manager ',
          image: '#'
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
      {/* Responsive Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-gradient-to-b from-blue-100/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/30 to-transparent" />
      
      <div className="relative py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Leadership Team
            </h2>
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-blue-500" />
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-blue-500 to-transparent rounded-full" />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="relative p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl shadow-blue-900/5 transition duration-300 group-hover:shadow-blue-900/10">
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-b from-white/80 to-white/30 group-hover:from-white/90 group-hover:to-white/40 transition-colors duration-500" />
                  
                  <div className="relative">
                    <div className="relative mb-4 md:mb-6 lg:mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto aspect-square"
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </motion.div>
                    </div>

                    <div className="text-center relative">
                      <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold mb-1 md:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-sm text-blue-600 font-medium">
                        {member.role}
                      </p>
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
