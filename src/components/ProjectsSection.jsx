import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A selection of things I've built — from full-stack platforms to embedded systems.</p>
      <div className="projects-grid container">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;