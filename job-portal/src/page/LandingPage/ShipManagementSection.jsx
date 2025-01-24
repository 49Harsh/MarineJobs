import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Technical Management",
    description: "Operating a vessel efficiently in compliance with environmental, statutory requirements today requires a wide scope of expertise and experience. We endeavour to operate all managed vessels in the safest and most efficient manner possible, aiding our principals to achieve cost economies.",
    image: "/ship-3.jpg"
  },
  {
    id: "02",
    title: "Crew Management Services",
    description: "Professional crew management is one of our core activities. We provide fully trained and qualified officers and ratings for all types of vessels including tankers, bulk carriers, and specialized vessels.",
    image: "/ship-2.jpg"
  },
  {
    id: "03",
    title: "Marine Consultancy",
    description: "Our experienced team provides comprehensive marine consultancy services including pre-purchase inspections, condition surveys, and operational audits.",
    image: "/boat-1.jpg"
  },
  {
    id: "04",
    title: "Safety Management",
    description: "We maintain the highest standards of safety across our fleet through rigorous implementation of safety management systems and regular training.",
    image: "/ship-3.jpg"
  },
  {
    id: "05",
    title: "Commercial Operations",
    description: "Our commercial operations team provides comprehensive support for vessel chartering, voyage planning, and operational optimization.",
    image: "/ship-2.jpg"
  },
  {
    id: "06",
    title: "Quality Assurance",
    description: "We maintain stringent quality standards across all operations, ensuring compliance with international regulations and industry best practices.",
    image: "/boat-1.jpg"
  }
];

const ShipManagementSection = () => {
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const serviceSections = useRef([]);

  useEffect(() => {
    const rightContent = rightSectionRef.current;
    const leftContent = leftSectionRef.current;

    // Initial animation for left content
    gsap.fromTo(leftContent, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Create sticky effect for left section
    ScrollTrigger.create({
      trigger: leftContent,
      start: 'top 24px',
      end: `bottom+=${rightContent.offsetHeight - leftContent.offsetHeight} bottom`,
      pin: true,
      pinSpacing: false
    });

    // Animate service sections
    serviceSections.current.forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#f8f9fa]" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="lg:w-[45%]" ref={leftSectionRef}>
            <div className="bg-[#1a56db] text-white p-12 rounded-xl">
              <h4 className="text-xl font-medium mb-4">
                How Columbia Aurus Helps
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
              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors text-lg">
                View All
                <ArrowRight className="w-5 h-5" />
              </button>
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
                    <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2 text-lg transition-colors">
                      Know More
                      <ArrowRight className="w-5 h-5" />
                    </button>
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

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ArrowRight } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     id: "01",
//     title: "Technical Management",
//     description: "Operating a vessel efficiently in compliance with environmental, statutory requirements today requires a wide scope of expertise and experience. We endeavour to operate all managed vessels in the safest and most efficient manner possible, aiding our principals to achieve cost economies.",
//     image: "/ship-3.jpg"
//   },
//   {
//     id: "02",
//     title: "Crew Management Services",
//     description: "Professional crew management is one of our core activities. We provide fully trained and qualified officers and ratings for all types of vessels including tankers, bulk carriers, and specialized vessels.",
//     image: "/ship-2.jpg"
//   },
//   {
//     id: "03",
//     title: "Marine Consultancy",
//     description: "Our experienced team provides comprehensive marine consultancy services including pre-purchase inspections, condition surveys, and operational audits.",
//     image: "/boat-1.jpg"
//   },
//   {
//     id: "04",
//     title: "Safety Management",
//     description: "We maintain the highest standards of safety across our fleet through rigorous implementation of safety management systems and regular training.",
//     image: "/ship-3.jpg"
//   },
//   {
//     id: "05",
//     title: "Commercial Operations",
//     description: "Our commercial operations team provides comprehensive support for vessel chartering, voyage planning, and operational optimization.",
//     image: "/ship-2.jpg"
//   },
//   {
//     id: "06",
//     title: "Quality Assurance",
//     description: "We maintain stringent quality standards across all operations, ensuring compliance with international regulations and industry best practices.",
//     image: "/boat-1.jpg"
//   }
// ];

// const ShipManagementSection = () => {
//   const containerRef = useRef(null);
//   const leftSectionRef = useRef(null);
//   const rightSectionRef = useRef(null);
//   const serviceSections = useRef([]);

//   useEffect(() => {
//     const rightContent = rightSectionRef.current;
//     const leftContent = leftSectionRef.current;

//     // Initial animation for left content
//     gsap.fromTo(leftContent, 
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     // Create sticky effect for left section
//     ScrollTrigger.create({
//       trigger: leftContent,
//       start: 'top 24px',
//       end: () => `bottom+=${rightContent.offsetHeight - leftContent.offsetHeight - 24}`,
//       pin: true,
//       pinSpacing: false,
//       scrub: 0.5,
//       onUpdate: (self) => {
//         // Prevent overscrolling
//         if (self.progress > 1) {
//           self.progress = 1;
//         }
//       }
//     });

//     // Animate service sections
//     serviceSections.current.forEach((section, index) => {
//       gsap.fromTo(section,
//         { opacity: 0, y: 50 },
//         {
//           scrollTrigger: {
//             trigger: section,
//             start: 'top center+=100',
//             toggleActions: 'play none none reverse'
//           },
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: 0.2
//         }
//       );
//     });

//     // Additional scroll trigger to handle the end of scroll
//     ScrollTrigger.create({
//       trigger: rightContent,
//       start: 'bottom bottom',
//       onEnter: () => {
//         gsap.to(leftContent, {
//           y: rightContent.offsetHeight - leftContent.offsetHeight,
//           duration: 0.5,
//           ease: "power2.out"
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-[#f8f9fa]" ref={containerRef}>
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Section */}
//           <div className="lg:w-[45%]" ref={leftSectionRef}>
//             <div className="bg-[#1a56db] text-white p-12 rounded-xl">
//               <h4 className="text-xl font-medium mb-4">
//                 How Columbia Aurus Helps
//               </h4>
//               <h2 className="text-4xl xl:text-5xl font-bold mb-8 leading-tight">
//                 Ship Management and Marine Services Provider
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-gray-100 text-lg">
//                   Our main objective is to work in partnership with ship owners and their charterers to optimise their operational efficiency by offering them a variety of functions including crew management, technical and operational services – essential for any fleet to operate smoothly at sea.
//                 </p>
//                 <p className="text-gray-100 text-lg">
//                   Each ship owner is different with their own unique needs. We work as their extended office in India as one team, with the same transparency, philosophy, and dedication enabling tailor-made services to meet client requirements.
//                 </p>
//               </div>
//               <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors text-lg">
//                 View All
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="lg:w-[55%]" ref={rightSectionRef}>
//             <div className="space-y-8">
//               {services.map((service, index) => (
//                 <div
//                   key={service.id}
//                   ref={el => serviceSections.current[index] = el}
//                   className="group"
//                 >
//                   <div className="relative h-[300px] md:h-[400px] mb-6 overflow-hidden rounded-xl">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="bg-white p-8 rounded-xl">
//                     <span className="text-7xl font-bold text-gray-100 opacity-50 mb-4 block">
//                       {service.id}
//                     </span>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 text-lg mb-6">
//                       {service.description}
//                     </p>
//                     <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2 text-lg transition-colors">
//                       Know More
//                       <ArrowRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShipManagementSection;