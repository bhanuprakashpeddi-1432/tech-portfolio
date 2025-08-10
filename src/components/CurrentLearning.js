import React from "react";
import { motion } from "framer-motion";
import { FaBookReader, FaGraduationCap, FaChartLine, FaClock, FaPlay } from "react-icons/fa";
import "./CurrentLearning.css";

const currentLearning = [
  {
    title: "Advanced React Patterns",
    provider: "React Training",
    category: "Frontend Development",
    progress: 65,
    timeRemaining: "2 weeks",
    description: "Deep dive into advanced React patterns, performance optimization, and modern hooks",
    skills: ["React", "Performance", "Hooks", "Patterns"],
    startDate: "2025-07-15",
    estimatedCompletion: "2025-10-15",
    type: "course"
  },
  {
    title: "AWS Solutions Architect",
    provider: "AWS Training",
    category: "Cloud Computing",
    progress: 45,
    timeRemaining: "8 weeks",
    description: "Comprehensive AWS cloud architecture and services preparation",
    skills: ["AWS", "Cloud Architecture", "DevOps", "Infrastructure"],
    startDate: "2025-04-01",
    estimatedCompletion: "2025-09-01",
    type: "course"
  },
  {
    title: "Docker & Kubernetes",
    provider: "Linux Academy",
    category: "DevOps",
    progress: 70,
    timeRemaining: "4 weeks",
    description: "Container orchestration and deployment strategies",
    skills: ["Docker", "Kubernetes", "Container Orchestration", "CI/CD"],
    startDate: "2025-01-20",
    estimatedCompletion: "2025-09-20",
    type: "course"
  }
];

const CurrentLearning = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 70) return 'var(--accent)';
    if (progress >= 40) return 'var(--primary)';
    return 'var(--secondary)';
  };

  const getTypeIcon = (type) => {
    return type === 'certification' ? <FaGraduationCap /> : <FaBookReader />;
  };

  return (
    <motion.section
      id="current-learning"
      className="current-learning"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="learning-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="header-title-row">
            <FaChartLine className="section-icon" />
            <h2>Current Learning Journey</h2>
          </div>
          <p>Continuous growth and skill development in progress</p>
        </motion.div>

        <motion.div
          className="learning-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {currentLearning.map((course, index) => (
            <motion.div
              key={index}
              className="learning-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-header">
                <div className="course-type">
                  {getTypeIcon(course.type)}
                  <span className="category">{course.category}</span>
                </div>
                <div className="time-remaining">
                  <FaClock />
                  <span>{course.timeRemaining}</span>
                </div>
              </div>

              <div className="card-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="provider">{course.provider}</p>
                <p className="course-description">{course.description}</p>

                <div className="progress-section">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-percentage">{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: getProgressColor(course.progress) }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div className="skills-section">
                  <h4>Skills Learning</h4>
                  <div className="skills-tags">
                    {course.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <FaPlay />
                    <div>
                      <span className="timeline-label">Started</span>
                      <span className="timeline-date">
                        {new Date(course.startDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <FaGraduationCap />
                    <div>
                      <span className="timeline-label">Expected Completion</span>
                      <span className="timeline-date">
                        {new Date(course.estimatedCompletion).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="learning-status">
                  <span className={`status-indicator ${course.progress >= 70 ? 'near-completion' : course.progress >= 40 ? 'in-progress' : 'getting-started'}`}>
                    {course.progress >= 70 ? 'Near Completion' : course.progress >= 40 ? 'In Progress' : 'Getting Started'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="learning-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <FaBookReader />
              <div>
                <span className="stat-number">{currentLearning.length}</span>
                <span className="stat-label">Active Courses</span>
              </div>
            </div>
            <div className="stat-item">
              <FaChartLine />
              <div>
                <span className="stat-number">
                  {Math.round(currentLearning.reduce((acc, course) => acc + course.progress, 0) / currentLearning.length)}%
                </span>
                <span className="stat-label">Average Progress</span>
              </div>
            </div>
            <div className="stat-item">
              <FaGraduationCap />
              <div>
                <span className="stat-number">
                  {currentLearning.filter(course => course.type === 'certification').length}
                </span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CurrentLearning;
