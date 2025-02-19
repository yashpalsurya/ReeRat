import React from 'react';

function ContactForm() {
  return (
    <div id='contact' className="flex flex-col items-center min-h-screen bg-[#F9FAFB]">
      {/* Contact Us Heading */}
      <h2 className="text-3xl font-bold text-center mt-12 mb-8">Contact Us</h2>

      {/* Contact Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0">
          <img
            src="https://i.pinimg.com/736x/08/8c/09/088c099c81191b734e0db14f0e253142.jpg"
            alt="Contact"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-6">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 lg:mb-0"
                />
                
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
