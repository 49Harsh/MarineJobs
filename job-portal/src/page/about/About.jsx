import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to MarineJobs, your trusted partner in maritime recruitment. We specialize in connecting maritime professionals with outstanding career opportunities across the globe.
        </p>
        <p className="mb-4">
          With over 15 years of experience in the maritime industry, we understand the unique challenges and requirements of maritime recruitment. Our dedicated team works tirelessly to ensure the perfect match between qualified candidates and prestigious shipping companies.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Mission</h2>
        <p className="mb-4">
          To revolutionize maritime recruitment by providing innovative solutions and maintaining the highest standards of professionalism and integrity in our services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Vision</h2>
        <p className="mb-4">
          To become the world's leading maritime recruitment platform, setting new standards in the industry while fostering growth and development in the maritime sector.
        </p>
      </div>
    </div>
  );
};

export default About;
