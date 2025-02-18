import React from "react";

const WrapperContainer = ({ children, className = "" }) => {
  return (
    <div
    className={`max-w-[1000px] w-fullbg mx-auto py-5 ${className}`}
  >
    {children}
  </div>
  );
};

export default WrapperContainer;
