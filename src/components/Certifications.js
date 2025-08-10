import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import "./Certifications.css";

const certifications = [
  {
    title: "React.js - The FullStack Open",
    organization: "University of Helsinki",
    date: "2023",
    description: "Comprehensive React.js development course covering hooks, context, and modern patterns",
    certificateUrl: "#",
    skills: ["React.js", "Hooks", "Context API", "Redux"],
    status: "completed"
  },
   {
    title: "RedHat Certified Application Developer",
    organization: "Red Hat",
    date: "2024",
    description: "Certification for application developers using Red Hat technologies",
    certificateUrl: "#",
    skills: ["Red Hat", "Application Development"],
    status: "completed"
  },
   {
    title: "MongoDB Developer",
    organization: "MongoDB University",
    date: "In Progress",
    description: "Comprehensive MongoDB development course covering data modeling, aggregation, and performance optimization",
    certificateUrl: "#",
    skills: ["MongoDB", "Data Modeling", "Aggregation", "Performance Optimization"],
    status: "in-progress"
  },
//   {
//     title: "JavaScript Algorithms and Data Structures",
//     organization: "freeCodeCamp",
//     date: "2023",
//     description: "Comprehensive course on algorithms, data structures, and problem-solving",
//     certificateUrl: "#",
//     skills: ["Algorithms", "Data Structures", "Problem Solving"],
//     status: "completed"
//   },
  {
    title: "Google Cloud Associate Engineer",
    organization: "Google Cloud",
    date: "In Progress",
    description: "Cloud infrastructure and Google Cloud Platform services",
    certificateUrl: "#",
    skills: ["Google Cloud", "Infrastructure", "DevOps"],
    status: "in-progress"
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "In Progress",
    description: "Foundational cloud computing and AWS services knowledge",
    certificateUrl: "#",
    skills: ["Cloud Computing", "AWS Services", "Security"],
    status: "in-progress"
  },
  {
    title: "Full Stack Web Development",
    organization: "Coursera",
    date: "2023",
    description: "Complete web development specialization covering front-end and back-end technologies",
    certificateUrl: "#",
    skills: ["HTML/CSS", "JavaScript", "Database Design"],
    status: "completed"
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleViewCertificate = (certificateUrl, title) => {
    if (certificateUrl !== "#") {
      window.open(certificateUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Placeholder action - could open a modal or show a message
      console.log(`Viewing certificate: ${title}`);
    }
  };

  return (
    <motion.section
      id="certifications"
      className="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="certifications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="header-title-row">
            <FaCertificate className="section-icon" />
            <h2>Certifications & Achievements</h2>
          </div>
          <p>Professional certifications and continuous learning journey</p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`certification-card ${cert.status}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-header">
                <div className={`status-badge ${cert.status}`}>
                  {cert.status === 'completed' ? 'Certified' : 'In Progress'}
                </div>
                <div className="certification-icon">
                  <FaCertificate />
                </div>
              </div>

              <div className="card-content">
                <h3 className="certification-title">{cert.title}</h3>
                
                <div className="certification-meta">
                  <div className="organization">
                    <FaBuilding />
                    <span>{cert.organization}</span>
                  </div>
                  <div className="date">
                    <FaCalendarAlt />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="certification-description">{cert.description}</p>

                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <motion.button
                  className="view-certificate-btn"
                  onClick={() => handleViewCertificate(cert.certificateUrl, cert.title)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={cert.status === 'in-progress'}
                >
                  {cert.status === 'completed' ? (
                    <>
                      <FaExternalLinkAlt />
                      View Certificate
                    </>
                  ) : (
                    <>
                      <FaCalendarAlt />
                      In Progress
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
