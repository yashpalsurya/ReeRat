import React, { useState } from 'react';
import WrapperContainer from '../Layout/WrapperContainer';
import logo from '../assets/log.png'; // Import the logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <WrapperContainer>
      <header className="bg-[#FFF0E9] p-4 flex justify-between items-center sticky top-0 z-10">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#hero"><img src={logo} alt="ReeRate Logo" className="h-10 w-auto" /></a>
        </div>

        {/* Navigation - Desktop and Tablet */}
        <nav className="hidden lg:flex space-x-8 text-black">
          <a
            href="#how-it-works"
            className="text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            Features
          </a>
          <a
            href="#blog"
            className="text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            Contact
          </a>
          <a
            href="#about"
            className="text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            About
          </a>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-[#FFF0E9] p-4 text-center">
            <a
              href="#how-it-works"
              className="block mb-4 text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="block mb-4 text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Features
            </a>
            <a
              href="#blog"
              className="block mb-4 text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block mb-4 text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Contact
            </a>
            <a
              href="#about"
              className="block mb-4 text-lg font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              About
            </a>
          </div>
        )}

        {/* Download Button */}
        <div className="lg:block hidden">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            Download Now
          </button>
        </div>
      </header>

      {/* Mobile Download Button */}
      <div className="lg:hidden flex justify-center mt-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200">
          Download Now
        </button>
      </div>
    </WrapperContainer>
  );
};

export default Header;
