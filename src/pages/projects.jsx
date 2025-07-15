// src/pages/projects.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Projects({
  variants,
  initial,
  animate,
  exit,
  transition,
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
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text text-muted">
                This website you're viewing — built using React + Vite.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">Roblox Games (Lua + Studio)</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.roblox.com/games/130690870968964/Emotion-Masters-Tycoon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • Tycoon Game
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.roblox.com/games/79540025970929/Escape-the-Obby-Or-get-TROLLED-NEW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    • Obby Game
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
