import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
const WorkPage = lazy(() => import("/src/pages/WorkPage/WorkPage"));
const ServicePage = lazy(() => import("/src/pages/ServicePage/ServicePage"));

// CSS STYLES
const mainContainer = ["mainContainer"].join("");
const navbarContainer = ["navbarContainer"].join("");

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={mainContainer}>
            <div className={navbarContainer}>
              <Navbar />
            </div>
            <HomePage />
            <AboutPage />
            <Suspense fallback={"Loading..."}>
              <WorkPage />
              <ServicePage />
            </Suspense>
            <ContactPage />
          </div>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
