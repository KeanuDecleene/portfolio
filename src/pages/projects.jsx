import React from "react";
import { motion } from "framer-motion";
import Screenshot from "../assets/Screenshot.png";
import Maintenance from "../assets/Screenshot1.png";
import GymCompare from "../assets/Screenshot4.png";

export default function Projects({
  variants,
  initial,
  animate,
  exit,
  transition,
  onOpenCalorieApp,
  darkMode,
}) {
  const primaryBtn = darkMode
    ? "btn btn-light text-dark border-light"
    : "btn btn-dark";
  const secondaryBtn = darkMode
    ? "btn btn-outline-light"
    : "btn btn-outline-dark";

  return (
    <motion.section
      key="projects"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <h2 className="h3 mb-4">Projects</h2>

      <div className="projects-masonry">
        {/* gym compare */}
        <div className="project-item">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card shadow rounded-4 border-0"
          >
            <div className="card-body">
              <h5 className="card-title">Gym Compare App</h5>
              <p className="card-text text-muted">
                A PyQt6-built app that helps compare gyms close to a user-input
                location. The app pulls data from the Overpass API to get gym
                distances and details, then displays them in a sorted format. I
                built this app to become more familiar with APIs, data handling,
                desktop application development in Python, and packaging apps
                into an executable.
              </p>
              <img
                src={GymCompare}
                alt="Gym Compare Screenshot"
                className="img-fluid rounded"
              />
              <div className="d-flex gap-2 mt-3 mb-3 flex-wrap">
                <a
                  href="https://github.com/KeanuDecleene/gym_compare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* roblox games */}
        <div className="project-item">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card shadow rounded-4 border-0"
          >
            <div className="card-body">
              <h5 className="card-title">Roblox Games (Lua + Studio)</h5>
              <p className="card-text text-muted">
                Designed and developed games using Roblox Studio and Lua
                scripting. These projects demonstrate game logic, UI design, and
                player engagement mechanics.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <a
                  href="https://www.roblox.com/games/130690870968964/Emotion-Masters-Tycoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Tycoon Game
                </a>
                <a
                  href="https://www.roblox.com/games/79540025970929/Escape-the-Obby-Or-get-TROLLED-NEW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  Obby Game
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* NormalUnits Chrome Extension */}
        <div className="project-item">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card shadow rounded-4 border-0"
          >
            <div className="card-body">
              <h5 className="card-title">NormalUnits Chrome Extension</h5>

              <p className="card-text text-muted">
                Developed a Chrome extension to automatically convert kilojoules
                to calories. I wanted to go through the process of building an
                extension for Chrome and was frustrated with constantly
                searching "x kilojoules to calories" into Google.
              </p>
              <img
                src={Screenshot}
                alt="NormalUnits Extension Screenshot"
                className="img-fluid rounded mb-3"
              />
              <div className="d-flex gap-2 mb-3 flex-wrap">
                <a
                  href="https://github.com/KeanuDecleene/NormalUnits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  View on GitHub
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/kkbgknhhgcdcpfgpdajeepcdbjdnjklc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Chrome Web Store
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* calorie app */}
        <div className="project-item">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card shadow rounded-4 border-0"
          >
            <div className="card-body">
              <h5 className="card-title">Calorie Maintenance Web App</h5>
              <p className="card-text text-muted">
                A web app that calculates daily calorie maintenance using the
                Mifflin-St Jeor equation and activity multipliers.
              </p>
              <img
                src={Maintenance}
                alt="Calorie Maintenance App Screenshot"
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <button className={primaryBtn} onClick={onOpenCalorieApp}>
                  Open Calorie Calculator
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
