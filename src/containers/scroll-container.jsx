import React from "react";

const ScrollContainer = ({
  children,
  containerStyles,
  scrollContainerStyles,
}) => {
  return (
    <div className={`scroll-container ${containerStyles}`}>
      <div className={`scroll-content-container ${scrollContainerStyles}`}>
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;
