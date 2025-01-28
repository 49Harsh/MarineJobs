import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building2, Users, Ship, Tag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-700" />,
      number: "25+",
      label: "Shore-based professionals",
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-700" />,
      number: "1",
      label: "Offices in India",
      subtext: "(Mumbai - HQ, Thane, Belapur, New Delhi, Kolkata, Chennai, Visakhapatnam, Kochi)",
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-700" />,
      number: "2K+",
      label: "Active Seafarer Pool",
      subtext: "(Conventional, Offshore & Passenger fleet)",
    }
  ];

  const certifications = [
    "IATA Approved",
    "RPSL Approved",
    "MLC Compliant",
    "ISO 9001 : 2015 Certified",
    "Document of Compliance (DOC) Holder",
    "Marlins Approved Test Centre"
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls.start("float");
    }
  }, [controls, inView]);

  const floatingAnimation = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span 
            className="text-orange-500 font-medium text-lg"
            variants={itemVariants}
          >
            Who we are?
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-2"
            variants={itemVariants}
          >
            Providing Maritime Services <br/> for over 10 years
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-gray-600 text-lg mb-8 max-w-3xl"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          RUN MARINE SERVICES PVT.LTD. is a world-class ship management and marine services provider in the maritime industry, managing various types of deep-sea and offshore vessels and other specialised tonnages.
        </motion.p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Section */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                variants={itemVariants}
              >
                <div className="p-3 bg-blue-50 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-orange-500">{stat.number}</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1">{stat.label}</p>
                  {stat.subtext && (
                    <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Images Section */}
          <div className="relative h-[400px]">
            {/* Background Image */}
            <motion.div
              className="absolute right-0 top-0 w-3/4 h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/ship-3.jpg"
                alt="Port Operations"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Foreground Image */}
            <motion.div
              className="absolute left-0 bottom-0 w-2/3 h-[300px]"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="/ship-2.jpg"
                alt="Maritime Workers"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Floating Stats Box */}
            {/* <motion.div 
              className="absolute right-4 bottom-4 bg-blue-600 p-6 rounded-lg text-white z-10"
              variants={floatingAnimation}
              animate="float"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <span className="text-4xl font-bold">200+</span>
              <p className="text-lg">Years of Collective Experience</p>
            </motion.div> */}
          </div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Tag className="w-6 h-6 text-orange-500" />
            {certifications.map((cert, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                variants={itemVariants}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;