import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Grievance Management System",
    description: "A comprehensive MERN stack application for managing and tracking grievances with real-time notifications, user authentication, and admin dashboard for efficient complaint resolution.",
    detailedDescription: "Built with React.js frontend, Node.js/Express backend, and MongoDB database. Features include user registration, complaint submission, status tracking, admin panel, and email notifications.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI"],
    github: "https://github.com/bhanuprakashpeddi-1432/grievance-management-system",
    liveDemo: "",
    features: ["User Authentication", "Real-time Notifications", "Admin Dashboard", "Status Tracking"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and enhanced with smooth animations using Framer Motion and AnimeJS for an engaging user experience.",
    detailedDescription: "Personal portfolio showcasing projects, skills, and experience with modern design principles, responsive layout, and smooth animations.",
    tags: ["React", "Framer Motion", "AnimeJS", "CSS3", "Responsive Design"],
    github: "https://github.com/bhanuprakashpeddi-1432/portfolio",
    liveDemo: "https://bhanuprakashpeddi.tech",
    features: ["Responsive Design", "Smooth Animations", "Modern UI", "Performance Optimized"]
  },
  {
    title: "Smart Inventory Management System",
    description: "An intelligent inventory management dashboard with advanced analytics, real-time stock tracking, and automated alerts for efficient warehouse management.",
    detailedDescription: "React-based dashboard with Shadcn/ui components, featuring inventory tracking, analytics charts, automated reorder alerts, and comprehensive reporting.",
    tags: ["React", "Shadcn/ui", "Chart.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/bhanuprakashpeddi-1432/Inventory_Management",
    liveDemo: "",
    features: ["Real-time Tracking", "Analytics Dashboard", "Automated Alerts", "Report Generation"]
  },
  {
    title: "Online Course Management System",
    description: "A comprehensive full-stack learning management system with role-based access control, course creation, and progress tracking for educational institutions.",
    detailedDescription: "Spring Boot and React-based LMS featuring JWT authentication, course enrollment system, lesson completion tracking, admin dashboard, and comprehensive user management with real-time progress analytics.",
    tags: ["Spring Boot", "React", "MySQL", "JWT", "Bootstrap", "JPA/Hibernate", "REST API"],
    github: "https://github.com/bhanuprakashpeddi-1432/OnlineCourseManagement_System",
    liveDemo: "",
    features: ["Role-based Access Control", "Course Management", "Progress Tracking", "Admin Dashboard"]
  }
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
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <FaGithub /> Code
              </a>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                  aria-label={`View ${project.title} live demo`}
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