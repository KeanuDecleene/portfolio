import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Keanu De Cleene</h1>
        <p className="lead text-muted">Tech Enthusiast</p>
      </header>

      <div className="row g-4">
        <div className="col-md-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h2 className="card-title h4 mb-3">About Me</h2>
              <p className="card-text">
                I'm a passionate web developer with experience in building
                modern, responsive websites and applications using React,
                JavaScript, and CSS.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="col-md-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h2 className="card-title h4 mb-3">Projects</h2>
              <ul className="list-unstyled">
                <li>• Personal Portfolio Website</li>
                <li>• Memory Game App</li>
                <li>• EV Charging Station Finder</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="col-md-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h2 className="card-title h4 mb-3">Skills</h2>
              <ul className="list-unstyled">
                <li>• React & JavaScript</li>
                <li>• HTML & CSS</li>
                <li>• UI/UX Design</li>
                <li>• Version Control (Git)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="col-md-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card h-100 shadow rounded-4"
          >
            <div className="card-body">
              <h2 className="card-title h4 mb-3">Contact</h2>
              <p className="card-text mb-3">Email: keanu@example.com</p>
              <button className="btn btn-primary">Get in Touch</button>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="text-center mt-5 text-muted">
        &copy; {new Date().getFullYear()} Keanu De Cleene. All rights reserved.
      </footer>
    </div>
  );
}
