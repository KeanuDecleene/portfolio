// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Screenshot from "../assets/Screenshot.png";
import Maintenance from "../assets/Screenshot1.png";

export default function Projects({
  variants,
  initial,
  animate,
  exit,
  transition,
  onOpenCalorieApp,
}) {
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
      <div className="row g-4">
        {/* Roblox Games */}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">Roblox Games (Lua + Studio)</h5>
              <p className="card-text text-muted">
                Designed and developed interactive games using Roblox Studio and
                Lua scripting. These projects demonstrate game logic, UI design,
                and player engagement mechanics.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <a
                  href="https://www.roblox.com/games/130690870968964/Emotion-Masters-Tycoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Tycoon Game
                </a>
                <a
                  href="https://www.roblox.com/games/79540025970929/Escape-the-Obby-Or-get-TROLLED-NEW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Obby Game
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CS2 Cheats Project */}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">CS2 Cheats – Wallhack Project</h5>
              <p className="card-text text-muted">
                A personal project experimenting with Counter-Strike 2 memory
                editing and overlays to reveal player positions through walls.
                This involved analyzing game memory, hooking into rendering
                pipelines, and overlaying ESP visuals using Lua and external
                tools.
              </p>
              <p className="text-muted small fst-italic">
                For educational and research purposes
              </p>
            </div>
          </motion.div>
        </div>

        {/* NormalUnits Chrome Extension */}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">NormalUnits Chrome Extension</h5>

              <p className="card-text text-muted">
                Developed a Chrome extension to automatically convert kilojoules
                to calories. I wanted to go through the process of building an
                extension for chrome and was frustrated with constantly
                searching "x kiloJoules to Calories" whenever I wanted to check.
              </p>
              <p className="text-muted small fst-italic">
                Built using JavaScript, HTML, and CSS.
              </p>
              <img
                src={Screenshot}
                alt="NormalUnits Extension Screenshot"
                className="img-fluid rounded mb-2"
              />
              <div className="d-flex gap-2 mb-3">
                <a
                  href="https://github.com/KeanuDecleene/NormalUnits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  View on GitHub
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/kkbgknhhgcdcpfgpdajeepcdbjdnjklc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on Chrome Web Store
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Calorie App */}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">Calorie Maintenance Web App</h5>
              <p className="card-text text-muted">
                A web app that calculates daily calorie maintenance using the
                Mifflin-St Jeor equation and activity multipliers.
              </p>
              <img
                src={Maintenance}
                alt="NormalUnits Extension Screenshot"
                className="img-fluid rounded "
              />
              <div className="mt-2">
                <button className="btn btn-primary" onClick={onOpenCalorieApp}>
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
