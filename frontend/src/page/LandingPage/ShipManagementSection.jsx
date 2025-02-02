import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Technical Management",
    description: "Operating a vessel efficiently in compliance with environmental, statutory requirements today requires a wide scope of expertise and experience. We endeavour to operate all managed vessels in the safest and most efficient manner possible, aiding our principals to achieve cost economies.",
    image: "/landing-01.jpg",
    url: "/services/technical-management"
  },
  {
    id: "02",
    title: "Crew Management Services",
    description: "Professional crew management is one of our core activities. We provide fully trained and qualified officers and ratings for all types of vessels including tankers, bulk carriers, and specialized vessels.",
    image: "/ship-2.jpg",
    url: "/services/crew-management"
  },
  {
    id: "03",
    title: "Marine Consultancy",
    description: "Our experienced team provides comprehensive marine consultancy services including pre-purchase inspections, condition surveys, and operational audits.",
    image: "/landing-02.jpg",
    url: "/services/consultancy"
  },
  {
    id: "04",
    title: "Safety Management",
    description: "We maintain the highest standards of safety across our fleet through rigorous implementation of safety management systems and regular training.",
    image: "/landing-03.jpg",
    url: "/services/documentation"
  },
];

const ShipManagementSection = () => {
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const serviceSections = useRef([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const rightContent = rightSectionRef.current;
    const leftContent = leftSectionRef.current;

    // Floating animation for left section
    gsap.to(leftContent, {
      y: 30,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Create scroll-triggered animations
    ScrollTrigger.create({
      trigger: leftContent,
      start: 'top 24px',
      end: `bottom+=${rightContent.offsetHeight - leftContent.offsetHeight} bottom`,
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        // Add a subtle rotation based on scroll
        gsap.to(leftContent, {
          rotateZ: self.progress * 2 - 1,
          duration: 0.5
        });
      }
    });

    // Animate service sections with stagger and parallax
    serviceSections.current.forEach((section, index) => {
      const img = section.querySelector('img');
      const content = section.querySelector('.bg-white');
      const title = section.querySelector('h3');
      const desc = section.querySelector('p');
      const btn = section.querySelector('button');

      // Create timeline for each service section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          scrub: 1
        }
      });

      // Parallax effect for images
      gsap.to(img, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Animate content with sequence
      tl.fromTo(content,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(title,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(desc,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(btn,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 },
        "-=0.2"
      );

      // Add hover animation
      gsap.set(section, { transformOrigin: "center center" });
      
      section.addEventListener('mouseenter', () => {
        gsap.to(section, {
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      section.addEventListener('mouseleave', () => {
        gsap.to(section, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });

    // Create scroll progress indicator
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#f8f9fa] relative" ref={containerRef}>
      {/* Add progress bar */}
      <div 
        ref={progressBarRef} 
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left transform scale-x-0 z-50"
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="lg:w-[45%] hidden lg:block" ref={leftSectionRef}>
            <div className="bg-[#1a56db] text-white p-12 rounded-xl">
              <h4 className="text-xl font-medium mb-4">
                How Run Marine Services Pvt.Ltd. Helps
              </h4>
              <h2 className="text-4xl xl:text-5xl font-bold mb-8 leading-tight">
                Ship Management and Marine Services Provider
              </h2>
              <div className="space-y-6">
                <p className="text-gray-100 text-lg">
                  Our main objective is to work in partnership with ship owners and their charterers to optimise their operational efficiency by offering them a variety of functions including crew management, technical and operational services – essential for any fleet to operate smoothly at sea.
                </p>
                <p className="text-gray-100 text-lg">
                  Each ship owner is different with their own unique needs. We work as their extended office in India as one team, with the same transparency, philosophy, and dedication enabling tailor-made services to meet client requirements.
                </p>
              </div>
              
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[55%]" ref={rightSectionRef}>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => serviceSections.current[index] = el}
                  className="group"
                >
                  <div className="relative h-[300px] md:h-[400px] mb-6 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-white p-8 rounded-xl">
                    <span className="text-7xl font-bold text-gray-100 opacity-50 mb-4 block">
                      {service.id}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                   <Link to={service.url}>
                   <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2 text-lg transition-colors">
                      Know More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                   </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipManagementSection;
