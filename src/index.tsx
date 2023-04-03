import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      <App />
      <ToastContainer />
    </Router>
  </ThemeProvider>
);
