import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <div>
          footer
      </div>
    </div>
  );
};

export default Layout;
