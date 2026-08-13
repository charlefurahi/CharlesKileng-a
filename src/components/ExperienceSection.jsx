import { motion } from "framer-motion";
import { experience } from "../data/experience";

function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        Practical training that's shaped how I build — from full-stack web development to hardware and cybersecurity.
      </p>

      <div className="timeline">
        {experience.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.org}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Icon />
              </div>
              <div className="card timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.org} · {item.location}</div>
                  </div>
                  <span className="timeline-date">{item.period}</span>
                </div>
                <ul className="timeline-desc">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="project-tag-row">
                  {item.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;