import logo from '../assets/log.png'

const Footer = () => {
    return (
      <footer className="bg-[#0B0D2C] text-white py-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <img
              src={logo} // Replace with the actual path to your logo
              alt="ReeRate Logo"
              className="mx-auto mb-4"
              style={{ maxWidth: '150px' }} // Adjust logo size if necessary
            />
          </div>
  
          {/* Newsletter Section */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Subscribe to Newsletter</h2>
            <p className="text-gray-400">Subscribe for the latest updates</p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:w-80 px-4 py-2 rounded-l-md bg-transparent border border-gray-500 text-white focus:outline-none"
              />
              <button className="w-full sm:w-auto px-6 py-2 bg-[#FFEFE5] text-black font-medium rounded-r-md">
                Submit
              </button>
            </div>
          </div>
  
          {/* Footer Content Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-400 text-sm mt-10">
            {/* ReeRate Info */}
            <div>
              <h3 className="text-lg font-semibold text-white">ReeRate</h3>
              <p>info@reerate.com</p>
              <p>+91-7880107286</p>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
  
            {/* Help Links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Help</h3>
              <ul className="space-y-2">
                <li>Terms of Use</li>
                <li>Share Feedback</li>
                <li>Report a Bug</li>
                <li>Customer Service</li>
                <li>Rate Our App</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
  
          {/* Social Links and App Download Section */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-0">
              <span className="text-white">Let's Try Out</span>
              <div className="flex space-x-3 text-xl">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
  
            {/* App Download Buttons */}
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-white text-black rounded-md flex items-center">
                <i className="fab fa-apple mr-2"></i> App Store
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-md flex items-center">
                <i className="fab fa-google-play mr-2"></i> Play Store
              </button>
            </div>
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
  