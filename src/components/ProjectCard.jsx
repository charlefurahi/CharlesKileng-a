import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Cover from "./Cover";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="card project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Cover
        icon={project.icon}
        colorFrom={project.colorFrom}
        colorTo={project.colorTo}
        pattern={project.pattern}
        alt={project.name}
      />
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <div className="project-tag-row">
          {project.tags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
          <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;