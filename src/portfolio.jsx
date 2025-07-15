import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AboutMe from "./pages/about.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/skills.jsx";
import Contact from "./pages/contact.jsx";

export default function Portfolio() {
  const [activePage, setActivePage] = useState("about");

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

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg px-4"
        style={{ backgroundColor: "#121212" }}
      >
        <span
          className="navbar-brand text-white fw-bold me-auto"
          style={{ paddingLeft: "4px" }}
        >
          Keanu De Cleene
        </span>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            {["about", "projects", "skills", "contact"].map((page) => (
              <li className="nav-item" key={page}>
                <button
                  className={`nav-link btn btn-link text-white ${
                    activePage === page ? "text-decoration-underline" : ""
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-wrapper">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top bg-light">
        &copy; {new Date().getFullYear()} Keanu De Cleene. All rights reserved.
      </footer>
    </>
  );
}
