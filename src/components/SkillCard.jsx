import { motion } from "framer-motion";
import Cover from "./Cover";

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="card skill-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Cover
        image={skill.image}
        icon={skill.icon}
        colorFrom={skill.colorFrom}
        colorTo={skill.colorTo}
        pattern={skill.pattern}
        alt={skill.title}
      />
      <div className="skill-card-body">
        <h3>{skill.title}</h3>
        <p>{skill.desc}</p>
      </div>
    </motion.div>
  );
}

export default SkillCard;