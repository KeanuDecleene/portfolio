// src/pages/skills.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Skills({
  variants,
  initial,
  animate,
  exit,
  transition,
}) {
  return (
    <motion.section
      key="skills"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <h2 className="h3 mb-4">Skills</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card shadow rounded-4"
      >
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>• React, Vite & JavaScript</li>
            <li>• HTML, CSS & Bootstrap</li>
            <li>• Git / GitHub</li>
            <li>• Roblox Studio & Lua</li>
            <li>• Game Memory/Script Editing (CS2, Lua)</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
