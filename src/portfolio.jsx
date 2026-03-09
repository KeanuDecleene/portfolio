// src/Portfolio.jsx
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import AboutMe from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import CalorieApp from "./pages/calorie-app.jsx";

import { Typewriter } from "react-simple-typewriter";
import {
  FiSun,
  FiMoon,
  FiUser,
  FiBriefcase,
  FiCpu,
  FiMail,
} from "react-icons/fi";

export default function Portfolio() {
  const [activePage, setActivePage] = useState("about");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const transitionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const animationProps = {
    variants: transitionVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.5 },
  };

  const renderSection = () => {
    switch (activePage) {
      case "about":
        return <AboutMe {...animationProps} darkMode={darkMode} />;
      case "projects":
        return (
          <Projects
            {...animationProps}
            darkMode={darkMode}
            onOpenCalorieApp={() => setActivePage("calorie-app")}
          />
        );
      case "contact":
        return <Contact {...animationProps} darkMode={darkMode} />;
      case "calorie-app":
        return (
          <CalorieApp
            {...animationProps}
            darkMode={darkMode}
            onBack={() => setActivePage("projects")}
          />
        );
      default:
        return null;
    }
  };
  const iconMap = {
    about: <FiUser className="me-1" />,
    projects: <FiBriefcase className="me-1" />,
    contact: <FiMail className="me-1" />,
  };

  return (
    <div>
      {/* navbar */}
      <nav
        className={`navbar navbar-expand-lg px-4 ${
          darkMode ? "navbar-dark bg-dark" : "bg-black"
        } shadow-sm`}
      >
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-center">
          <span className="navbar-brand text-white fw-bold mb-2 mb-lg-0">
            <Typewriter
              words={["Keanu De Cleene"]}
              loop={1}
              cursor={showCursor}
              cursorStyle=""
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={1000}
              onType={() => setShowCursor(true)}
              onLoopDone={() => setShowCursor(false)}
            />
          </span>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto align-items-center">
              {["about", "projects", "contact"].map((page) => (
                <li className="nav-item" key={page}>
                  <button
                    className={`nav-link btn btn-link text-white ${
                      activePage === page ? "active-link" : ""
                    }`}
                    onClick={() => setActivePage(page)}
                  >
                    {iconMap[page]}
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
              <li className="nav-item d-flex align-items-center">
                <button
                  onClick={toggleDarkMode}
                  className="nav-link btn btn-link text-white d-flex align-items-center justify-content-center p-0"
                  style={{ width: "40px", height: "40px" }}
                >
                  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* main section */}
      <main className="main-wrapper">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>

      {/* footer */}
      <footer
        className={`text-center py-4 border-top ${
          darkMode ? "footer-dark" : "footer-light"
        }`}
      >
        Hello.
      </footer>
    </div>
  );
}
