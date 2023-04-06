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
      <Header />
      <Outlet />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default LayoutDefault;
