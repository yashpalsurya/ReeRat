import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Using React Icons for navigation

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Tech Innovations',
      image: 'https://i.pinimg.com/736x/07/3d/f2/073df2262225c99949ca760643711103.jpg',
      text: 'ReeRate transformed the way I manage my projects. The ease of use and intuitive interface has made a huge difference in our team\'s efficiency.',
    },
    {
      id: 2,
      name: 'Sara Lee',
      role: 'Founder, Creative Agency',
      image: 'https://i.pinimg.com/736x/07/3d/f2/073df2262225c99949ca760643711103.jpg',
      text: 'The customer service at ReeRate is amazing. They were always there to answer my questions and guide me through the process. Highly recommend!',
    },
    {
      id: 3,
      name: 'Michael Smith',
      role: 'Marketing Manager, Global Corp',
      image: 'https://i.pinimg.com/736x/07/3d/f2/073df2262225c99949ca760643711103.jpg',
      text: 'I’ve been using ReeRate for a few months, and it’s been a game-changer! The knowledge shared and the results have exceeded my expectations.',
    },
    {
      id: 4,
      name: 'Rachel Green',
      role: 'Product Manager, NextTech',
      image: 'https://i.pinimg.com/736x/07/3d/f2/073df2262225c99949ca760643711103.jpg',
      text: 'ReeRate\'s intuitive design and incredible customer support have made it an essential tool for my team. It really simplifies our daily processes!',
    },
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Automatically change the review every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000); // Change every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, []);

  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">People Love ReeRate</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here are just a few of the amazing testimonials about our great results, personable service, and knowledge.
        </p>

        {/* Review Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mx-auto max-w-lg relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 z-10">
            <img
              src={reviews[currentReviewIndex].image}
              alt={reviews[currentReviewIndex].name}
              className="h-20 w-20 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 italic mb-4">
              "{reviews[currentReviewIndex].text}"
            </p>
            <p className="font-medium text-gray-800">{reviews[currentReviewIndex].name}</p>
            <p className="text-sm text-gray-500">{reviews[currentReviewIndex].role}</p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute bottom-4 left-0 right-0 px-6">
            <button
              onClick={prevReview}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextReview}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
