import { motion } from "framer-motion";
import { technicalSkills } from "../data/technicalSkills";
import { education } from "../data/education";

function FoundationSection() {
  return (
    <section id="foundation" className="section foundation">
      <h2 className="section-title">Skills & Education</h2>
      <p className="section-subtitle">The toolbox I work with, and the academic foundation behind it.</p>

      <div className="foundation-grid container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="foundation-col-title">Technical Skills</h3>
          {technicalSkills.map((cat) => (
            <div key={cat.category} className="tech-category">
              <h4 className="tech-category-title">{cat.category}</h4>
              <div className="tech-badges">
                {cat.items.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="foundation-col-title">Education</h3>
          <div className="education-list">
            {education.map((edu) => (
              <div key={edu.school} className="card education-card">
                <div className="edu-top">
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <div className="edu-school">{edu.school} · {edu.period}</div>
                  </div>
                  <span className="edu-grade-badge">{edu.grade}</span>
                </div>
                <div className="project-tag-row">
                  {edu.subjects.map((s) => (
                    <span key={s} className="project-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FoundationSection;