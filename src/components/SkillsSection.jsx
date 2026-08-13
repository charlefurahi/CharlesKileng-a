import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo, FaTools, FaMusic } from "react-icons/fa";

const SKILLS = [
  { icon: <FaCode />, title: "Web Development", desc: "Building responsive, full-stack web apps with React, Django REST Framework, and modern JavaScript." },
  { icon: <FaPaintBrush />, title: "Graphic Design", desc: "Creating branding, posters, and social media content using Adobe Photoshop and Inkscape." },
  { icon: <FaVideo />, title: "Video & Photo Editing", desc: "Editing promotional videos, reels, and event photography into polished final content." },
  { icon: <FaTools />, title: "Hardware & OS Maintenance", desc: "Diagnosing hardware issues, OS installation, system recovery, and data backups." },
  { icon: <FaMusic />, title: "Piano & Music", desc: "Performing piano — a creative outlet that sharpens focus and discipline." },
];

function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills & Talents</h2>
      <p className="section-subtitle">A mix of technical and creative abilities I bring to every project.</p>

      <div className="skills-grid container">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.title}
            className="card skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;