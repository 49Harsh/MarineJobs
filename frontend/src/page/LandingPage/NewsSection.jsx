import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: '22',
      month: 'Jun 2022',
      title: 'Aurus Ship Management Pvt. Ltd and Columbia Ship management Ltd join forces as Columbia Aurus Ship Management India',
      image: '/path-to-logos-image.jpg',
    },
    {
      id: 2,
      date: '08',
      month: 'May 2023',
      title: 'Expanding CASM s Footprints in India',
      image: '/path-to-india-map.jpg',
    },
    {
      id: 3,
      date: '09',
      month: 'Jun 2023',
      title: 'Growing in India, achieving Globally',
      image: '/path-to-globe-image.jpg',
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-medium">Columbia Aurus In The News</h3>
        <h2 className="text-[#1a237e] text-4xl font-bold mt-2">Let's Checkout Our All Current News.</h2>
        <p className="text-gray-600 mt-4">
          Welcome to our media centre! Here you will find our latest news, reports and events.
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-6">
              {/* Date Display */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {item.date}
                </span>
                <span className="text-gray-500">
                  {item.month}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                {item.title}
              </h3>

              {/* Read More Link - Styled as text rather than button to match design */}
              <div className="mt-4">
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;