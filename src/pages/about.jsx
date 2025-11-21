import React from "react";
import { motion } from "framer-motion";
import keanuImage from "../assets/me.jpg";

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
      <div className="container-fluid d-flex flex-column flex-lg-row align-items-center g-4">
        {/* image */}
        <div className="col-12 col-md-4 text-center mb-3 mb-md-0 pe-md-4">
          <img
            src={keanuImage}
            alt="Keanu De Cleene"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Text column */}
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center ps-md-4">
          <h1 className="display-6 fw-bold mb-3 text-center text-lg-start">
            Hey!
          </h1>
          <div className="card shadow rounded-4">
            <div className="card-body">
              <p className="lead text-muted mb-3">
                I'm <strong>Keanu De Cleene</strong>, A postgraduate student at
                the University of Auckland, based in Auckland, New Zealand. I
                have a strong foundation in modern technologies and a keen
                interest in software development, AI, web engineering, and
                mobile applications.
              </p>
              <p className="text-muted mb-3">
                My interest for tech sparked young. I couldn’t wrap my head
                around how I could simultaneously play games with people on the
                other side of the world. Curiosity led me down a path of
                discovery, eventually solidifying my decision to pursue a degree
                in Computer Science and further education in AI.
              </p>
              <p className="text-muted mb-3">
                Over the course of my degree, and personal projects I’ve gained
                hands-on experience with React, JavaScript, CSS, Java, PHP,
                MySQL, REST APIs, and Android development. I've contributed to
                meaningful projects like <em>The Impact Lab</em>, collaborating
                with local councils to improve youth engagement. I'm eager to
                contribute to real-world solutions in the tech space and open to
                internship or graduate opportunities.
              </p>
              <p className="text-muted mb-3">
                Outside of tech, I enjoy surfing, working out, and staying
                active. I’ve been consistently training in the gym for several
                years.
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
