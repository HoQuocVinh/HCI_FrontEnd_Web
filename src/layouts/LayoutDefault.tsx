import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "modules/partials/Footer";
import Header from "modules/partials/Header";
import { useTheme } from "components/context/ThemeProvider";

const LayoutDefault = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.style.setProperty("background", `var(--${theme})`);
  }, [theme]);
  const location = useLocation();
  return (
    <div>
      <div className="fixed top-0 z-20 w-full">
        <Header />
      </div>
      <Outlet />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default LayoutDefault;
