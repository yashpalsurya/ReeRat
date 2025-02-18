import React from "react";
import featureImg from "../assets/Mobiletwo.png"; // Replace with actual image path
import WrapperContainer from "../Layout/WrapperContainer";
import PropertySection from "./PropertySection";

const FewFeatures = () => {
  return (
    <>  <WrapperContainer>
      <section id="features" className="bg-[#FFF0E9] py-16">
        {/* Top Center Title & Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Few Features Gets Wow!
          </h2>
          <p className="text-gray-600 text-lg">
            Reerate has brought for you some features which will make you experience a different grab in the world of real estate.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-12 px-6">
          
          {/* Left Side - Image (50% Width on larger screens, full width on smaller ones) */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img 
              src={featureImg} 
              alt="Features" 
              className="w-3/4 sm:w-full h-auto max-h-[400px] object-contain" 
            />
          </div>

          {/* Right Side - Features List (50% Width on larger screens, full width on smaller ones) */}
          <div className="w-full sm:w-1/2 space-y-6 px-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Making Real E-State <br /> Buying & Selling Easier
            </h3>
            <ul className="list-disc text-gray-600 space-y-3 pl-5 text-lg">
              <li>We help buyers to bid for a project & get the best rate from the seller</li>
              <li>Verified Users, Blog section & Chat rooms</li>
              <li>Search thousands of properties</li>
              <li>Own, claim, and sell property</li>
              <li>Easily searchable property by user</li>
            </ul>
          </div>

        </div>
      </section>
    </WrapperContainer>
      <PropertySection/>
    </>
  
  );
};

export default FewFeatures;
