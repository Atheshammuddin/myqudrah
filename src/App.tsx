import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./style/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { redirects, routes } from "./redirect";
AOS.init();
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {redirects.map((redirect, index) => (
          <Route
            key={`redirect-${index}`}
            path={redirect.path}
            element={redirect.element}
          />
        ))}
      </Routes>
      <Footer />
      <div className="copy text-center">All rights reserved &copy; 2024</div>
    </div>
  );
}

export default App;
