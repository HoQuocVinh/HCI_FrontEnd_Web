import { ThemeProvider } from "components/context/ThemeProvider";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import store from "sagas/configureStore";
import "swiper/css";
import "swiper/css/pagination";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <App />
        <ToastContainer />
      </Router>
    </ThemeProvider>
  </Provider>
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
