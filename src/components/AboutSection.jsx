import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo, FaTools, FaMusic } from "react-icons/fa";

const STATS = [
  { number: "3+", label: "Years Learning Tech" },
  { number: "4+", label: "Projects Built" },
  { number: "5", label: "Core Skills" },
];

const HIGHLIGHTS = [
  { icon: <FaCode />, label: "Full Stack Dev" },
  { icon: <FaPaintBrush />, label: "Graphic Design" },
  { icon: <FaVideo />, label: "Video Editing" },
  { icon: <FaTools />, label: "Hardware & OS" },
  { icon: <FaMusic />, label: "Piano" },
];

function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <span className="hero-eyebrow">Get to know me</span>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
            About Me
          </h2>

          <p>
            I am <strong>Chifu Kilenga</strong>, a passionate <strong>Full Stack Developer</strong>{" "}
            with a strong focus on building modern, responsive, and user-friendly web
            applications. I enjoy transforming ideas into real-world digital solutions using
            clean code and thoughtful design.
          </p>

          <p>
            Beyond programming, I am a <strong>graphic designer</strong> skilled in Adobe
            Photoshop and Inkscape, a <strong>video & photo editor</strong>, a{" "}
            <strong>computer technician</strong> experienced in hardware repair, OS installation
            and backups, and a <strong>pianist</strong> who finds creativity and discipline
            through music.
          </p>

          <p>
            I'm continuously learning and open to freelance work, collaborations, and
            opportunities that let me grow through technology.
          </p>

          <div className="stat-grid">
            {STATS.map((s) => (
              <div key={s.label} className="card stat-card">
                <div className="stat-number gradient-text">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card"
          style={{ padding: "36px" }}
        >
          <h3 style={{ color: "#fff", marginBottom: "24px" }}>What I Do</h3>
          <div style={{ display: "grid", gap: "18px" }}>
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div className="skill-icon" style={{ width: 40, height: 40, fontSize: "1.1rem", marginBottom: 0 }}>
                  {h.icon}
                </div>
                <span style={{ color: "#e5e7eb", fontWeight: 500 }}>{h.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;