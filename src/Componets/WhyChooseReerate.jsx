import React from "react";
import { FaHandshake, FaRegMoneyBillAlt, FaHome, FaUserShield, FaBuilding, FaSearch } from "react-icons/fa";
import WrapperContainer from "../Layout/WrapperContainer";

const WhyChooseReerate = () => {
  return (
    <section id="blog" className="bg-white min-h-screen flex flex-col justify-center items-center text-center mt-16 py-16">
      {/* Top Center Title & Description */}
      <div className="max-w-2xl mx-auto mb-12 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          D o n ' t B e L a t e
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Why Choose Reerate
        </h3>
        <p className="text-gray-600 text-lg">
          Reerate provides the best deals to buyers from builders or sellers. It helps buyers save a lot of money by dealing directly with the seller at a fair price.
        </p>
      </div>
      
      {/* Cards Section */}
      <WrapperContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {/* Card 1 - Direct Deals */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-blue-600 mb-4">
              <FaHandshake />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Direct Deals
            </h4>
            <p className="text-gray-600">
              We connect buyers directly with sellers or builders, cutting out the middlemen and ensuring the best deals.
            </p>
          </div>

          {/* Card 2 - Save Money */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-green-600 mb-4">
              <FaRegMoneyBillAlt />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Save Money
            </h4>
            <p className="text-gray-600">
              Buyers save significantly by negotiating fair prices directly with the seller without additional overhead costs.
            </p>
          </div>

          {/* Card 3 - Wide Range of Properties */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-purple-600 mb-4">
              <FaHome />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Range of Properties
            </h4>
            <p className="text-gray-600">
              From residential to commercial properties, we offer a wide range of listings to meet every buyer’s need.
            </p>
          </div>
          
          {/* Card 4 - Verified Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-red-600 mb-4">
              <FaUserShield />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Verified Users
            </h4>
            <p className="text-gray-600">
              All users are verified to ensure trust and security in every transaction.
            </p>
          </div>

          {/* Card 5 - Trusted Builders */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-orange-600 mb-4">
              <FaBuilding />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Builders
            </h4>
            <p className="text-gray-600">
              We work with certified and trusted builders to provide the best quality properties.
            </p>
          </div>

          {/* Card 6 - Easy Property Search */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center text-4xl text-yellow-600 mb-4">
              <FaSearch />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Property Search
            </h4>
            <p className="text-gray-600">
              Our platform allows easy search and filtering of properties to help you find exactly what you need.
            </p>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default WhyChooseReerate;
