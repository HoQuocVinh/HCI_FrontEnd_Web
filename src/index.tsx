import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "swiper/css";
import "swiper/css/pagination";
import { ThemeProvider } from "components/context/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <Router>
      <ScrollToTop />
      <App />
      <ToastContainer />
    </Router>
  </ThemeProvider>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
