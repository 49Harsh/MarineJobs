import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CareerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const carouselImages = [
    {
      image: "/ship-2.jpg",
      title: "Careers on Shore",
      subtitle: "Vacancies",
      heading: "Explore Our Opportunities",
      description: "We are committed in supporting you to achieve your career goals.\nYOUR FUTURE IS CALLING.",
      additionalText: "In case currently there is no role matching your profile please click below to submit a General Application."
    },
    {
      image: "/boat-1.jpg",
      title: "Join Our Team",
      subtitle: "Opportunities",
      heading: "Build Your Career With Us",
      description: "Discover exciting opportunities in maritime management and operations.\nGROW WITH US.",
      additionalText: "We offer competitive packages and continuous professional development opportunities."
    },
    {
      image: "/ship-3.jpg",
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {carouselImages.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl space-y-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3
                className="text-white text-4xl md:text-5xl font-bold"
                variants={variants}
              >
                {carouselImages[currentSlide].title}
              </motion.h3>

              <motion.div
                className="space-y-4"
                variants={variants}
                transition={{ delay: 0.4 }}
              >
                <p className="text-blue-400 text-xl font-medium">
                  {carouselImages[currentSlide].subtitle}
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-bold">
                  {carouselImages[currentSlide].heading}
                </h2>
                <p className="text-gray-200 text-lg whitespace-pre-line">
                  {carouselImages[currentSlide].description}
                </p>
                <p className="text-gray-300 text-base max-w-xl">
                  {carouselImages[currentSlide].additionalText}
                </p>
              </motion.div>

              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition-colors"
                variants={variants}
                transition={{ delay: 0.6 }}
              >
                General Application
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 bottom-4 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSection;