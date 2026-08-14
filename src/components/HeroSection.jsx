import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaCircleCheck, FaArrowDown } from "react-icons/fa6";
import heroImage from "../assets/MaryChalesk.jpg";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";

const ROLES = ["Web Developer", "Graphic Designer", "Hardware Technician", "Pianist"];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2400
    );
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid-lines" />

      <div className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text"
        >
          <div className="hero-status">
            <FaCircleCheck />
            <span>Available for freelance & collaboration</span>
          </div>

          <p className="hero-kicker">Computer Engineering · Design · Technology</p>

          <h1 className="hero-title">
            I build <span className="gradient-text">digital experiences</span> that work.
          </h1>

          <p className="hero-role">
            <span className="role-label">Currently:</span>
            <span className="gradient-text">{ROLES[roleIndex]}</span>
          </p>

          <p className="hero-desc">
            I'm Charles Kilenga — a technical problem solver combining software,
            hardware, design, and security to turn practical ideas into useful
            digital products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-main-btn" onClick={scrollTo("projects")}>
              Explore my work <FaArrowRight />
            </a>
            <a href={resume} download className="btn btn-outline">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-trust">
            <span>Building with</span>
            <div className="hero-tech-pills">
              <span>React</span>
              <span>Web</span>
              <span>Hardware</span>
              <span>Design</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="hero-visual"
        >
          <div className="hero-profile-card">
            <div className="hero-profile-top">
              <span className="profile-label">PORTFOLIO / 2026</span>
              <span className="profile-dot" />
            </div>

            <div className="hero-image-wrap">
              <div className="hero-image-glow" />
              <div className="hero-image-ring">
                <img src={heroImage} alt="Charles Kilenga" className="hero-image" />
              </div>
            </div>

            <div className="hero-profile-info">
              <div>
                <strong>Charles Kilenga</strong>
                <span>Developer · Designer · Engineer</span>
              </div>
              <span className="profile-index">01</span>
            </div>

            <div className="hero-mini-grid">
              <div>
                <strong>04+</strong>
                <span>Core roles</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Curiosity</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-top">
            <span className="floating-icon"><FaCircleCheck /></span>
            <div>
              <strong>Problem solver</strong>
              <small>from idea to implementation</small>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-bottom">
            <span className="floating-number">04</span>
            <div>
              <strong>Ways I create</strong>
              <small>Code · Design · Hardware · Music</small>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-services" aria-label="Areas of work">
        <div className="hero-services-track">
          <span>WEB DEVELOPMENT</span><i>✦</i>
          <span>UI / UX DESIGN</span><i>✦</i>
          <span>HARDWARE</span><i>✦</i>
          <span>CYBERSECURITY</span><i>✦</i>
          <span>CREATIVE TECHNOLOGY</span><i>✦</i>
          <span>WEB DEVELOPMENT</span><i>✦</i>
          <span>UI / UX DESIGN</span><i>✦</i>
        </div>
      </div>

      <motion.a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll to about section"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default HeroSection;
