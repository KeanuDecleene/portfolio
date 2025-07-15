// src/pages/about.jsx
import React from "react";
import { motion } from "framer-motion";
import keanuImage from "../assets/me.jpg"; // Adjust path if needed

export default function AboutMe({
  variants,
  initial,
  animate,
  exit,
  transition,
}) {
  return (
    <motion.section
      key="about"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <h1 className="display-4 fw-bold mb-4 text-center">About Me</h1>

      <div className="row align-items-center g-4">
        {/* Left: Image */}
        <div className="col-md-4 text-center">
          <img
            src={keanuImage}
            alt="Keanu De Cleene"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Right: Text */}
        <div className="col-md-8">
          <div className="card shadow rounded-4">
            <div className="card-body">
              <p className="lead text-muted mb-3">
                I'm <strong>Keanu De Cleene</strong>, a third-year Computer
                Science student at the University of Waikato, based in Tauranga,
                New Zealand. I have a strong foundation in modern technologies
                and a keen interest in software development, web engineering,
                and mobile applications.
              </p>
              <p className="text-muted mb-3">
                Over the course of my degree, I’ve gained hands-on experience
                with React, Vite, JavaScript, CSS, Java, PHP, MySQL, REST APIs,
                and Android development. I enjoy working on creative projects —
                from personal websites to game logic and Roblox games using Lua.
              </p>
              <p className="text-muted mb-3">
                I've contributed to meaningful projects like{" "}
                <em>The Impact Lab</em>, collaborating with local councils to
                improve youth engagement. I'm eager to contribute to real-world
                solutions in the tech space and open to internship or junior
                developer opportunities.
              </p>
              <p className="mb-2">
                <a
                  href="https://github.com/KeanuDecleene"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="https://www.linkedin.com/in/keanu-de-cleene-4a93a2353/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
