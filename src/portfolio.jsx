import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AboutMe from "./pages/about.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/skills.jsx";
import Contact from "./pages/contact.jsx";

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
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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
        return <AboutMe {...animationProps} />;
      case "projects":
        return <Projects {...animationProps} />;
      case "skills":
        return <Skills {...animationProps} />;
      case "contact":
        return <Contact {...animationProps} />;
      default:
        return null;
    }
  };

  const iconMap = {
    about: <FiUser className="me-1" />,
    projects: <FiBriefcase className="me-1" />,
    skills: <FiCpu className="me-1" />,
    contact: <FiMail className="me-1" />,
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg px-4 ${
          darkMode ? "navbar-dark bg-dark" : "bg-black"
        } shadow-sm`}
      >
        <span className="navbar-brand text-white fw-bold me-auto">
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
            {["about", "projects", "skills", "contact"].map((page) => (
              <li className="nav-item" key={page}>
                <button
                  className={`nav-link btn btn-link text-white ${
                    activePage === page ? "active-link" : ""
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {iconMap[page]}
                  {page === "about"
                    ? "About Me"
                    : page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <button
                onClick={toggleDarkMode}
                className="nav-link btn btn-link text-white ms-3"
              >
                {darkMode ? (
                  <FiSun className="me-1" />
                ) : (
                  <FiMoon className="me-1" />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-wrapper">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        className={`text-center py-4 border-top ${
          darkMode ? "footer-dark" : "footer-light"
        }`}
      >
        &copy; {new Date().getFullYear()} Keanu De Cleene. All rights reserved.
      </footer>
    </>
  );
}
