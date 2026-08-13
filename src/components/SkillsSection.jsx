import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills & Talents</h2>
      <p className="section-subtitle">A mix of technical and creative abilities I bring to every project.</p>
      <div className="skills-grid container">
        {skills.map((s, i) => (
          <SkillCard key={s.title} skill={s} index={i} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;