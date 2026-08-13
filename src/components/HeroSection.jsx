import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import heroImage from "../assets/MaryChalesk.jpg";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";

const ROLES = ["Web Developer", "Graphic Designer", "Hardware Technician", "Pianist"];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text"
        >
          <span className="hero-eyebrow">Available for freelance & collaboration</span>
          <h1 className="hero-title">Hi, I'm Charles Kileng'a</h1>
          <p className="hero-role gradient-text">{ROLES[roleIndex]}</p>
          <p className="hero-desc">
            A technical problem solver by day and a creative designer by heart. Whether I'm
            reviving hardware, building web apps, or composing digital experiences, I build with
            precision.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollTo("projects")}>
              View My Work
            </a>
            <a href={resume} download className="btn btn-outline">
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hero-image-wrap"
        >
          <div className="hero-image-glow" />
          <img src={heroImage} alt="Charles Kileng'a" className="hero-image" />
        </motion.div>
      </div>

      <motion.div className="scroll-cue" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

export default HeroSection;