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
        whileHover={{ scale: 1.01 }}
        className="card shadow rounded-4"
      >
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>• React, Vite & JavaScript</li>
            <li>• HTML, CSS & Bootstrap</li>
            <li>• Java, PHP, MySQL</li>
            <li>• Git / GitHub</li>
            <li>• REST APIs, Android Development</li>
            <li>• Roblox Studio & Lua</li>
            <li>• Game Memory/Script Editing (CS2, Lua)</li>
            <li>• Cybersecurity & Computer Systems</li>
            <li>• x86 Assembly, C Programming</li>
            <li>• C#, SQL, Object-Oriented Programming</li>
            <li>• Statistics & Computational Mathematics</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
