import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "modules/partials/Footer";
import Header from "modules/partials/Header";

const LayoutDefault = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutDefault;
