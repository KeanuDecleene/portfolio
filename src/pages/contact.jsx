import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({
  variants,
  initial,
  animate,
  exit,
  transition,
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !message) {
      alert("Please fill in both your name and message.");
      return;
    }

    const mailto = `mailto:keanudecleene124@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Hi, my name is ${name}.\n\n${message}`)}`;

    window.location.href = mailto;
  };

  return (
    <motion.section
      key="contact"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <h2 className="h3 mb-4">Contact Me</h2>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="card shadow rounded-4"
      >
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="nameInput"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">
              Message
            </label>
            <textarea
              id="messageInput"
              className="form-control"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleSend}>
            Send Message
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
