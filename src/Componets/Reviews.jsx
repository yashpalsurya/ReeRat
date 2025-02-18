import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Innovations",
      text: "ReeRate transformed the way I manage my projects. The ease of use and intuitive interface has made a huge difference in our team’s efficiency.",
    },
    {
      id: 2,
      name: "Sara Lee",
      role: "Founder, Creative Agency",
      text: "The customer service at ReeRate is amazing. They were always there to answer my questions and guide me through the process. Highly recommend!",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Marketing Manager, Global Corp",
      text: "I’ve been using ReeRate for a few months, and it’s been a game-changer! The knowledge shared and the results have exceeded my expectations.",
    },
    {
      id: 4,
      name: "Rachel Green",
      role: "Product Manager, NextTech",
      text: "ReeRate’s intuitive design and incredible customer support have made it an essential tool for my team. It really simplifies our daily processes!",
    },
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          People Love ReeRate
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Here are just a few of the amazing testimonials about our great results, personable service, and knowledge.
        </p>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl max-w-3xl mx-auto min-h-[250px] flex flex-col justify-center">
                <p className="text-lg md:text-2xl text-gray-700 italic mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  {review.name}
                </p>
                <p className="text-md md:text-lg text-gray-500">{review.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="custom-prev bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
            <FiChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button className="custom-next bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
            <FiChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
