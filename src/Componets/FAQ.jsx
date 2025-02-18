import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import React Icons for plus and minus

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F1F5F9] text-center">
      <h2 className="text-4xl font-extrabold text-black mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Question 1 */}
        <div className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <button
            className="w-full text-left text-2xl font-semibold text-black hover:text-blue-600 transition-all duration-200 flex justify-between items-center py-4 px-6"
            onClick={() => toggleQuestion(1)}
          >
            <span>What is ReeRate?</span>
            {openIndex === 1 ? (
              <FiMinus className="h-6 w-6 text-gray-600" />
            ) : (
              <FiPlus className="h-6 w-6 text-gray-600" />
            )}
          </button>
          {openIndex === 1 && (
            <div className="pt-4 text-lg text-gray-700 text-left px-6 pb-4">
              ReeRate is a platform that allows users to rate and review products, services, and experiences to help others make informed decisions.
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <button
            className="w-full text-left text-2xl font-semibold text-black hover:text-blue-600 transition-all duration-200 flex justify-between items-center py-4 px-6"
            onClick={() => toggleQuestion(2)}
          >
            <span>How can I register on ReeRate?</span>
            {openIndex === 2 ? (
              <FiMinus className="h-6 w-6 text-gray-600" />
            ) : (
              <FiPlus className="h-6 w-6 text-gray-600" />
            )}
          </button>
          {openIndex === 2 && (
            <div className="pt-4 text-lg text-gray-700 text-left px-6 pb-4">
              You can register on ReeRate by clicking the "Sign Up" button on the homepage and filling out the registration form with your details.
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <button
            className="w-full text-left text-2xl font-semibold text-black hover:text-blue-600 transition-all duration-200 flex justify-between items-center py-4 px-6"
            onClick={() => toggleQuestion(3)}
          >
            <span>How do I leave a review?</span>
            {openIndex === 3 ? (
              <FiMinus className="h-6 w-6 text-gray-600" />
            ) : (
              <FiPlus className="h-6 w-6 text-gray-600" />
            )}
          </button>
          {openIndex === 3 && (
            <div className="pt-4 text-lg text-gray-700 text-left px-6 pb-4">
              To leave a review, search for the product or service you want to rate, and you will find the option to submit your review at the bottom of the page.
            </div>
          )}
        </div>

        {/* Question 4 */}
        <div className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <button
            className="w-full text-left text-2xl font-semibold text-black hover:text-blue-600 transition-all duration-200 flex justify-between items-center py-4 px-6"
            onClick={() => toggleQuestion(4)}
          >
            <span>Is ReeRate free to use?</span>
            {openIndex === 4 ? (
              <FiMinus className="h-6 w-6 text-gray-600" />
            ) : (
              <FiPlus className="h-6 w-6 text-gray-600" />
            )}
          </button>
          {openIndex === 4 && (
            <div className="pt-4 text-lg text-gray-700 text-left px-6 pb-4">
              Yes, ReeRate is completely free to use for both users and businesses. You can sign up, rate products, and leave reviews without any cost.
            </div>
          )}
        </div>

        {/* Question 5 */}
        <div className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <button
            className="w-full text-left text-2xl font-semibold text-black hover:text-blue-600 transition-all duration-200 flex justify-between items-center py-4 px-6"
            onClick={() => toggleQuestion(5)}
          >
            <span>Can businesses respond to reviews?</span>
            {openIndex === 5 ? (
              <FiMinus className="h-6 w-6 text-gray-600" />
            ) : (
              <FiPlus className="h-6 w-6 text-gray-600" />
            )}
          </button>
          {openIndex === 5 && (
            <div className="pt-4 text-lg text-gray-700 text-left px-6 pb-4">
              Yes, businesses have the ability to respond to reviews in a respectful and professional manner.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
