import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
FaArrowDown,
FaArrowRight,
FaCircleCheck,
FaDownload,
} from "react-icons/fa6";

import heroImage from "../assets/MaryChalesk.jpg";
import resume from "../assets/Charles_Kilenga_CV.pdf";

const ROLES = [
"Web Developer",
"Graphic Designer",
"Hardware Technician",
"Pianist",
];

function HeroSection() {
const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setRoleIndex(
(currentIndex) => (currentIndex + 1) % ROLES.length
);
}, 2400);

return () => clearInterval(interval);

}, []);

const scrollTo = (id) => (event) => {
event.preventDefault();

document.getElementById(id)?.scrollIntoView({
  behavior: "smooth",
  block: "start",
});

};

return (
<section id="hero" className="hero-section">
<div
className="hero-orb hero-orb-one"
aria-hidden="true"
/>

  <div
    className="hero-orb hero-orb-two"
    aria-hidden="true"
  />

  <div
    className="hero-grid-lines"
    aria-hidden="true"
  />

  <div className="hero">
    {/* ================= TEXT CONTENT ================= */}
    <motion.div
      className="hero-text"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-status">
        <FaCircleCheck aria-hidden="true" />
        <span>
          Available for freelance & collaboration
        </span>
      </div>

      <p className="hero-kicker">
        Computer Engineering · Design · Technology
      </p>

      <h1 className="hero-title">
        I build{" "}
        <span className="gradient-text">
          digital experiences
        </span>{" "}
        that work.
      </h1>

      <p className="hero-role">
        <span className="role-label">
          Currently:
        </span>{" "}
        <span
          className="gradient-text"
          aria-live="polite"
        >
          {ROLES[roleIndex]}
        </span>
      </p>

      <p className="hero-desc">
        I'm Charles Kilenga — a technical problem solver
        combining software, hardware, design, and security
        to turn practical ideas into useful digital products.
      </p>

      <div className="hero-actions">
        <a
          href="#projects"
          className="btn btn-primary hero-main-btn"
          onClick={scrollTo("projects")}
        >
          <span>Explore my work</span>
          <FaArrowRight aria-hidden="true" />
        </a>

        <a
          href={resume}
          download
          className="btn btn-outline"
          aria-label="Download Charles Kilenga CV"
        >
          <FaDownload aria-hidden="true" />
          <span>Download CV</span>
        </a>
      </div>

      <div className="hero-trust">
        <span>Building with</span>

        <div className="hero-tech-pills">
          <span>React</span>
          <span>Web</span>
          <span>Vue</span>
          <span>Design</span>
        </div>
      </div>
    </motion.div>

    {/* ================= IMAGE CONTENT ================= */}
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, x: 35, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.75,
        delay: 0.08,
      }}
    >
      {/* HELLO / WELCOME - IWE JUU YA PICHA */}
      <div className="hero-welcome">
        <h2 className="hero-welcome-title">
          Hey, welcome
          <span
            className="hero-welcome-wave"
            aria-hidden="true"
          >
            👋
          </span>
        </h2>

        <p className="hero-welcome-text">
          I’m Charles — glad you stopped by.
        </p>
      </div>

      {/* IMAGE */}
      <div className="hero-image-wrap">
        <div
          className="hero-image-glow"
          aria-hidden="true"
        />

        <div className="hero-image-ring">
          <img
            src={heroImage}
            alt="Charles Kilenga"
            className="hero-image"
          />
        </div>
      </div>
    </motion.div>
  </div>

  {/* ================= SERVICES ================= */}
  <div
    className="hero-services"
    aria-label="Areas of work"
  >
    <div className="hero-services-track">
      <span>WEB DEVELOPMENT</span>
      <i aria-hidden="true">✦</i>

      <span>UI / UX DESIGN</span>
      <i aria-hidden="true">✦</i>

      <span>HARDWARE</span>
      <i aria-hidden="true">✦</i>

      <span>CYBERSECURITY</span>
      <i aria-hidden="true">✦</i>

      <span>CREATIVE TECHNOLOGY</span>
      <i aria-hidden="true">✦</i>

      <span>WEB DEVELOPMENT</span>
      <i aria-hidden="true">✦</i>

      <span>UI / UX DESIGN</span>
    </div>
  </div>

  {/* ================= SCROLL CUE ================= */}
  <motion.a
    href="#about"
    className="scroll-cue"
    aria-label="Scroll to about section"
    onClick={scrollTo("about")}
    animate={{ y: [0, 7, 0] }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
    }}
  >
    <span>Scroll to explore</span>
    <FaArrowDown aria-hidden="true" />
  </motion.a>
</section>

);
}

export default HeroSection;
