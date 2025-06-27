import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skills-container"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="skills-title"
      >
        My <span>Skills</span>
      </motion.h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)"
            }}
            className="skill-card"
          >
            <div className="skill-icon" style={{ color: `var(--skill-color-${index})` }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;