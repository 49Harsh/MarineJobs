import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Particles from 'react-tsparticles';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CareerSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const carouselImages = [
    {
      image: "/landing-01.jpg",
      title: "Careers on Shore",
      subtitle: "Vacancies",
      heading: "Explore Our Opportunities",
      description: "We are committed in supporting you to achieve your career goals.\nYOUR FUTURE IS CALLING.",
      additionalText: "In case currently there is no role matching your profile please click below to submit a General Application."
    },
    {
      image: "/landing-02.jpg",
      title: "Join Our Team",
      subtitle: "Opportunities",
      heading: "Build Your Career With Us",
      description: "Discover exciting opportunities in maritime management and operations.\nGROW WITH US.",
      additionalText: "We offer competitive packages and continuous professional development opportunities."
    },
    {
      image: "/landing-03.jpg",
      title: "Maritime Excellence",
      subtitle: "Positions",
      heading: "Lead the Future of Maritime",
      description: "Be part of a dynamic team shaping the future of maritime services.\nINNOVATE WITH US.",
      additionalText: "Join our global team of maritime professionals and make an impact in the industry."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const particlesOptions = {
    particles: {
      number: { value: 30 },
      color: { value: "#ffffff" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true
      }
    }
  };

  const handleNavigateToVacancies = () => {
    navigate('/vacanciesui');
  };

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Particles Background */}
      <Particles options={particlesOptions} className="absolute inset-0" />

      {/* 3D Perspective Container */}
      <div className="absolute inset-0 flex flex-col md:flex-row perspective-1000">
        {/* Split Screen Layout - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full relative transform-style-3d">
          {carouselImages.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rotate-y-3"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                rotateY: index === currentSlide ? 0 : 90
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-110 transform-gpu"
              />
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full flex items-center justify-center px-4 md:px-12">
          <motion.div
            className="relative z-10 backdrop-blur-lg bg-white/10 p-4 md:p-8 rounded-2xl border border-white/20 shadow-xl w-full max-w-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4 md:space-y-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="relative">
               
                <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
                  {carouselImages[currentSlide].title}
                </h3>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-blue-300 text-lg md:text-xl font-medium">
                  {carouselImages[currentSlide].subtitle}
                </p>
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  {carouselImages[currentSlide].heading}
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {carouselImages[currentSlide].description}
                </p>
              </div>

              <motion.button
                onClick={handleNavigateToVacancies}
                className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-orange-400 rounded-xl w-full md:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                  General Application
                </span>
                <div className="absolute inset-0 bg-orange-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Navigation - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-6">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
          >
            <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-400' : 'bg-white/30'
            }`} />
            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur px-3 py-1 rounded text-white text-sm">
              {index + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-400 w-6' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerSection;