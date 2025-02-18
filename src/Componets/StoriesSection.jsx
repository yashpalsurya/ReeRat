import React from 'react';

const StoriesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Read Our Stories
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          We would like to share with you RARE & Reerate Connection
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Added Cool Features
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At unde veniam earum rerum dolore tenetur quibusdam consequuntur.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200">
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Awesome Works
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At unde veniam earum rerum dolore tenetur quibusdam consequuntur.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200">
              Read More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Looking Cool At Pink
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At unde veniam earum rerum dolore tenetur quibusdam consequuntur.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
