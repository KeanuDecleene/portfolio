import React from "react";
import { motion } from "framer-motion";

export default function Contact({
  variants,
  initial,
  animate,
  exit,
  transition,
}) {
  return (
    <motion.section
      key="contact"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <h2 className="h3 mb-4">Contact</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card shadow rounded-4"
      >
        <div className="card-body">
          <p>
            <strong>Email:</strong> keanu@example.com
          </p>
          <a
            href="mailto:keanudecleene124@gmail.com"
            className="btn btn-accent"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
