import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const carouselData = [
  {
    title: "TRAVEL & LOGISTIC ARRANGEMENTS",
    description: "An IATA licensed business division, offering specialized travel and logistics solutions tailored for both maritime and corporate needs.",
    buttonText: "Know More",
    bgImage: "/boat-1.jpg"
  },
  {
    title: "GLOBAL SHIPPING SERVICES",
    description: "Comprehensive shipping solutions with worldwide coverage, ensuring reliable and efficient cargo transportation across continents.",
    buttonText: "Learn More",
    bgImage: "/ship-2.jpg"
  },
  {
    title: "CORPORATE TRAVEL SOLUTIONS",
    description: "Dedicated corporate travel management services designed to streamline your business travel needs with personalized attention.",
    buttonText: "Explore More",
    bgImage: "/ship-3.jpg"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Carousel */}
      <div className="relative h-screen w-full overflow-hidden">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-2xl space-y-6">
                  {/* Orange Line */}
                  <div className="w-12 h-1 bg-orange-500" />
                  
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {slide.title}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200">
                    {slide.description}
                  </p>
                  
                  {/* Button */}
                  <button className="bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-white animate-bounce w-6 h-6" />
          <ChevronDown className="text-white animate-bounce w-6 h-6 -mt-3" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;