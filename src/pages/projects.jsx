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
        {/* Portfolio Website */}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text text-muted">
                This website you're viewing — built using React + Vite, styled
                with Bootstrap and CSS, and deployed on GitHub Pages. Fully
                responsive and animated with Framer Motion.
              </p>
            </div>
          </motion.div>
        </div>

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
              <ul className="list-unstyled mb-0">
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
                *For educational and research purposes only. Not intended for
                online use or competitive play.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
