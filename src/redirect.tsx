import { Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/contact us/ContactUs";
import Services from "./pages/services/Services";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/about-us", element: <About /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/services/:serviceName", element: <Services /> },
];

export const redirects = [
  { path: "/about", element: <Navigate to="/about-us" replace /> },
  { path: "/contact", element: <Navigate to="/contact-us" replace /> },
];

export const getRedirectElement = (to: string) => <Navigate to={to} replace />;
