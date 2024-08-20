import React from "react";

const MainContainer = ({ children, containerStyles }) => {
  return <div className={`main-container ${containerStyles}`}>{children}</div>;
};

export default MainContainer;
