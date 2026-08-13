import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    name: "NyumbaLink",
    desc: "A property rental & listing platform for Tanzania built with Django REST Framework — JWT auth, role-based permissions, geolocation search, and Cloudinary media.",
    tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
    github: "#",
    live: "#",
  },
  {
    name: "GolaniSDA Church Website",
    desc: "A full-stack church platform with a Vue 3 + Tailwind frontend and Django backend, including Stripe donations, a media gallery, and a custom admin console.",
    tags: ["Vue 3", "Django REST", "Tailwind", "Stripe"],
    github: "#",
    live: "https://golanisda.org",
  },
  {
    name: "AI Student Support Assistant",
    desc: "A university project pairing a FastAPI backend with a local Ollama LLM and a Gradio interface to answer student queries.",
    tags: ["FastAPI", "Ollama", "Gradio", "Python"],
    github: "#",
    live: "#",
  },
  {
    name: "Smart Water Tank Automation",
    desc: "An Arduino-based system using an HX711 load cell for tank level sensing, with tare calibration and pump failsafe logic.",
    tags: ["Arduino", "C++", "HX711", "IoT"],
    github: "#",
    live: "#",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A selection of things I've built — from full-stack platforms to embedded systems.</p>

      <div className="projects-grid container">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            className="card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="project-card-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="project-tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
                <a href={p.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;