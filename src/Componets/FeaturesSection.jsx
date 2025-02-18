import React from "react";
import { FaSearch, FaBuilding, FaGavel, FaUserCheck, FaHandshake, FaExchangeAlt } from "react-icons/fa";
import featureImage from "../assets/mobile.png"; // Replace with the actual image path

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          App helps to directly connect seller and buyer <br /> through a unique building process
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          App works very smoothly with your requirements and is easy to install and register for you and your clients.
        </p>

        {/* Features Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Side - 3 Cards */}
          <div className="space-y-8">
            <FeatureCard icon={<FaSearch />} title="Search Project / Property" text="You can easily search project & property." />
            <FeatureCard icon={<FaBuilding />} title="Select From Available Unit in a Project" text="You can easily select a unit in a project." />
            <FeatureCard icon={<FaGavel />} title="Place A Bid" text="Application based on RERA Approved Project." />
          </div>

          {/* Center Image */}
          <div className="w-64 md:w-80">
            <img src={featureImage} alt="Feature" className="w-full h-auto" />
          </div>

          {/* Right Side - 3 Cards */}
          <div className="space-y-8">
            <FeatureCard icon={<FaUserCheck />} title="Get Details of Verified Seller" text="Investor / Broker / Owner all can use this app." />
            <FeatureCard icon={<FaHandshake />} title="Easily Connect with Seller" text="This application helps users easily connect with sellers." />
            <FeatureCard icon={<FaExchangeAlt />} title="Transact" text="You can watch verified and non-verified users as well as property." />
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md w-72">
      <div className="text-blue-600 text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
