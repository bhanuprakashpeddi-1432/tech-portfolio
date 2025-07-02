import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Grieviance System",
    description: "Built with MERN Stack",
    tags: ["React", "Nodejs", "MongoDB"],
    github: "https://github.com/bhanuprakashpeddi-1432/grievance-management-system",
    liveDemo: ""
  },
  {
    title: "Portfolio Website",
    description: "Animated with Framer Motion",
    tags: ["React", "Framer Motion", "AnimeJS"],
    github: "https://github.com/bhanuprakashpeddi-1432/portfolio",
    liveDemo: ""
  },
  {
    title: "Smart Inventory Management System",
    description: "The Most Optimized and Smart Inventory Management Dashboard",
    tags: ["React", "Shadcn/ui"],
    github: "https://github.com/bhanuprakashpeddi-1432/Inventory_Management",
    liveDemo: ""
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-container"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="projects-title"
      >
        My <span>Projects</span>
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)"
            }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                <FaGithub /> Code
              </a>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;