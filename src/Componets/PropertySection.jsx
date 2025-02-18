import React from "react";
import propertyImg from "../assets/mobile3.png"; // Replace with actual image path
import WrapperContainer from "../Layout/WrapperContainer";

const PropertySection = () => {
  return (
    <WrapperContainer>
      <section className="bg-[#FFF0E9] py-16">
        {/* Top Center Title & Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Discover Your Dream Property
          </h2>
          <p className="text-gray-600 text-lg">
            Find the perfect property to fit your needs. Our listings offer a variety of options tailored to your requirements.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-12 px-6">
          
          {/* Left Side - Property Features (50% Width on larger screens, full width on smaller ones) */}
          <div className="w-full sm:w-1/2 space-y-6 px-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Find Your Perfect Property
            </h3>
            <ul className="list-disc text-gray-600 space-y-3 pl-5 text-lg">
              <li>Prime locations with high investment potential</li>
              <li>Verified listings to ensure trust and security</li>
              <li>Competitive pricing and flexible payment options</li>
              <li>Wide range of property types, from residential to commercial</li>
              <li>Easy access to property details and contact with the seller</li>
            </ul>
          </div>

          {/* Right Side - Property Image (50% Width on larger screens, full width on smaller ones) */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img 
              src={propertyImg} 
              alt="Property" 
              className="w-3/4 sm:w-full h-auto max-h-[400px] object-contain" 
            />
          </div>

        </div>
      </section>
    </WrapperContainer>
  );
};

export default PropertySection;
