import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ limit, showViewAll = false }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">{limit ? "Featured Projects" : "My Projects"}</h2>
      <p className="section-subtitle">
        A selection of things I've built — from full-stack platforms to embedded systems.
      </p>
      <div className="projects-grid container">
        {list.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
      {showViewAll && (
        <div className="view-all-wrap">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;