import React from 'react';
import WrapperContainer from '../Layout/WrapperContainer';
import log from '../assets/mobile.png';

const Hero = () => {
  return (
    <WrapperContainer>
      <section id='hero'
        className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 py-16 lg:px-12"
        style={{ backgroundColor: '#FFF0E9' }}
      >
        {/* Left side content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Real Estate Exclusive Rates
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            India’s #1 Real Estate App
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={log}
            alt="Real Estate"
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
      </section>
    </WrapperContainer>
  );
};

export default Hero;
