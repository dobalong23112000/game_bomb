import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="d-flex justify-content-center container">{children}</div>
  );
};

export default DefaultLayout;
