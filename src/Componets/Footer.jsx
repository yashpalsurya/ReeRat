import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D42] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300">Get the latest updates and offers directly in your inbox.</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-80 px-4 py-3 rounded-md bg-gray-800 border border-gray-500 text-white focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-[#FF6B6B] text-white font-medium rounded-md hover:bg-[#E65C5C] transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-sm text-center sm:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white">ReeRate</h3>
            <p>info@reerate.com</p>
            <p>+91-7880107286</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Help</h3>
            <ul className="space-y-2">
              <li>Terms of Use</li>
              <li>Share Feedback</li>
              <li>Report a Bug</li>
              <li>Customer Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4 mt-2 text-xl">
              <i className="fab fa-facebook hover:text-blue-500 cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-blue-400 cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
              <i className="fab fa-linkedin hover:text-blue-600 cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-5 py-3 bg-white text-black rounded-md flex items-center gap-2 shadow-md hover:bg-gray-200 transition-all">
            <i className="fab fa-apple"></i> App Store
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-md flex items-center gap-2 shadow-md hover:bg-gray-200 transition-all">
            <i className="fab fa-google-play"></i> Play Store
          </button>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ReeRate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
