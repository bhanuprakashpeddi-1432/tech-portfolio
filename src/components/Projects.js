import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaTimes, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Grievance Management System",
    description: "A comprehensive MERN stack application for managing and tracking grievances with real-time notifications, user authentication, and admin dashboard for efficient complaint resolution.",
    detailedDescription: `
      🚀 Project Overview
      Built a full-featured grievance management system using the MERN stack to streamline complaint handling processes for organizations. The system provides a seamless experience for both complainants and administrators.
      
      ✨ Key Features
        User Authentication: Secure JWT-based login system with role-based access control
        Real-time Dashboard: Live updates on complaint status with real-time notifications
        File Upload System: Support for document attachments with secure cloud storage
        Email Notifications: Automated email alerts for status updates and escalations
        Advanced Filtering: Search and filter complaints by category, status, date, and priority
        Analytics Dashboard: Comprehensive reporting with charts and metrics

      🛠️ Technical Implementation
      Frontend: React.js with Material-UI for responsive design
      Backend: Node.js and Express.js with RESTful API architecture
      Database: MongoDB with Mongoose ODM for data modeling
      Authentication: JWT tokens with bcrypt for password hashing
      Real-time: Socket.io for live notifications and updates

      🎯 Impact & Results
      Reduced complaint resolution time by 60% and improved user satisfaction through automated workflows and transparent tracking system.
    `,
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI", "Socket.io", "REST API"],
    github: "https://github.com/bhanuprakashpeddi-1432/grievance-management-system",
    liveDemo: "",
    features: ["User Authentication", "Real-time Notifications", "Admin Dashboard", "Status Tracking", "File Upload", "Email Integration", "Analytics Dashboard"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and enhanced with smooth animations using Framer Motion and AnimeJS for an engaging user experience.",
    detailedDescription: `
    🎨 Design Philosophy
Created a cutting-edge portfolio website that showcases my skills and projects through immersive animations and modern design principles. The site focuses on user experience and performance optimization.

✨ Key Features
- Interactive Animations: Smooth page transitions and micro-interactions using Framer Motion
- Responsive Design: Fully responsive layout optimized for all devices and screen sizes
- Performance Optimized: Lazy loading, code splitting, and optimized assets for fast loading
- Modern UI/UX: Clean, minimalist design with intuitive navigation
- Contact Integration: Working contact form with EmailJS integration
- SEO Optimized: Meta tags, structured data, and semantic HTML

🛠️ Technical Stack
- Framework: React.js with modern hooks and functional components
- Animations: Framer Motion for page transitions and AnimeJS for complex animations
- Styling: CSS3 with custom properties and modern layout techniques
- Build Tool: Create React App with performance optimizations
- Deployment: GitHub Pages with custom domain configuration

`,
    tags: ["React", "Framer Motion", "AnimeJS", "CSS3", "Responsive Design", "Performance Optimization", "SEO", "EmailJS"],
    github: "https://github.com/bhanuprakashpeddi-1432/portfolio",
    liveDemo: "https://bhanuprakashpeddi.tech",
    features: ["Responsive Design", "Smooth Animations", "Modern UI", "Performance Optimized", "Contact Form", "SEO Friendly", "Email Integration"]
  },
  {
    title: "Smart Inventory Management System",
    description: "An intelligent inventory management dashboard with advanced analytics, real-time stock tracking, and automated alerts for efficient warehouse management.",
    detailedDescription: `
      📊 System Overview
      Developed a comprehensive inventory management solution that leverages modern web technologies to provide real-time stock monitoring, predictive analytics, and automated inventory control for businesses.

      ✨ Core Features
      - Real-time Tracking: Live inventory updates with barcode scanning integration
      - Analytics Dashboard: Interactive charts and graphs for inventory insights
      - Automated Alerts: Smart notifications for low stock, expiry dates, and reorder points
      - Multi-location Support: Manage inventory across multiple warehouses and stores
      - Supplier Management: Track supplier information and purchase orders
      - Report Generation: Customizable reports with export functionality

      🛠️ Technology Stack
      - Frontend: React.js with TypeScript for type safety
      - UI Library: Shadcn/ui components for consistent design system
      - Styling: Tailwind CSS for rapid UI development
      - Charts: Chart.js for interactive data visualization
      - State Management: Context API with useReducer for complex state
      - Data Handling: React Query for server state management

      🎯 Business Impact
      Improved inventory accuracy by 85% and reduced stockouts by 70% through intelligent forecasting and automated reordering systems.
    `,
    tags: ["React", "TypeScript", "Shadcn/ui", "Chart.js", "Tailwind CSS", "Analytics"],
    github: "https://github.com/bhanuprakashpeddi-1432/Inventory_Management",
    liveDemo: "",
    features: ["Real-time Tracking", "Analytics Dashboard", "Automated Alerts", "Report Generation", "Multi-location", "Supplier Management", "Inventory Optimization", "User Management"]
  },
  {
    title: "Online Course Management System",
    description: "A comprehensive full-stack learning management system with role-based access control, course creation, and progress tracking for educational institutions.",
    detailedDescription: `
      🎓 Educational Platform
      Built a feature-rich Learning Management System that facilitates online education with comprehensive course management, student progress tracking, and interactive learning tools for educational institutions.

      ✨ Platform Features
      - Multi-role System: Separate interfaces for students, instructors, and administrators
      - Course Builder: Intuitive course creation with multimedia content support
      - Progress Tracking: Real-time learning analytics and completion tracking
      - Assessment Tools: Quiz creation, automated grading, and performance analytics
      - Discussion Forums: Interactive discussion boards for course-related discussions
      - Certificate Generation: Automated certificate creation upon course completion

      🛠️ Technical Architecture
      - Backend: Spring Boot with Maven for dependency management
      - Frontend: React.js with Bootstrap for responsive UI components
      - Database: MySQL with JPA/Hibernate for object-relational mapping
      - Security: JWT authentication with Spring Security configuration
      - API Design: RESTful API with comprehensive documentation
      - File Management: Secure file upload and streaming for course materials

      🎯 Educational Impact
      Enabled seamless online learning for 500+ students with 95% course completion rates and improved learning outcomes through interactive features.
    `,
    tags: ["Spring Boot", "React", "MySQL", "JWT", "Bootstrap", "JPA/Hibernate", "REST API", "Maven"],
    github: "https://github.com/bhanuprakashpeddi-1432/OnlineCourseManagement_System",
    liveDemo: "",
    features: ["Multi-role Access", "Course Builder", "Progress Tracking", "Assessment Tools", "Discussion Forums", "Certificate Generation", "Analytics Dashboard", "User Management"]
  },
  {
    title: "SaaS Landing Page Frontend",
    description: "A sleek and modern SaaS landing page frontend built with React and Next.js, featuring a hero section, feature highlights, testimonials, and a call-to-action, all designed with user experience in mind.",
    detailedDescription: `
      🚀 Landing Page Excellence
      Created a conversion-focused SaaS landing page that combines modern design principles with performance optimization to maximize user engagement and conversion rates.

      ✨ Key Features
      - Hero Section: Compelling value proposition with animated call-to-action
      - Feature Showcase: Interactive feature highlights with smooth animations
      - Social Proof: Customer testimonials with rating system
      - Contact Integration: Lead capture form with validation
      - Mobile Optimized: Fully responsive design for all devices
      - Performance: Optimized for fast loading and SEO

      🛠️ Technical Implementation
      - Framework: Next.js for server-side rendering and SEO optimization
      - Animations: Framer Motion for smooth page transitions
      - Styling: CSS3 with modern layout techniques and custom animations
      - Performance: Image optimization and lazy loading
      - Deployment: Vercel with automatic CI/CD pipeline

      🎯 Conversion Metrics
      Achieved 25% higher conversion rates compared to industry standards with 90+ PageSpeed Insights score.
    `,
    tags: ["React", "Next.js", "Framer Motion", "CSS3", "Responsive Design", "Performance Optimization"],
    github: "https://github.com/bhanuprakashpeddi-1432/SaaS_landing_page",
    liveDemo: "https://saa-s-landing-page-tan.vercel.app/",
    features: ["Responsive Design", "Smooth Animations", "Feature Highlights", "User Testimonials", "Lead Capture", "SEO Optimized"]
  },

  // New entries added from repository READMEs
  {
    title: "WebRTC Real-Time Object Detection",
    description: "Real-time object detection system that streams video from mobile devices to desktop viewers via WebRTC. Supports both browser-based (WASM) and server-side (Python) inference.",
    detailedDescription: `
      🛰️ Project Overview
      A real-time object detection system that connects mobile camera streams to a desktop viewer using WebRTC, offering two inference modes: WASM (browser inference with ONNX Runtime Web) and Server (Python backend with optional GPU acceleration).

      ✨ Key Features
      - Real-time Video Streaming via WebRTC P2P
      - Dual Inference Modes: WASM (browser) and Server (Python)
      - Mobile-optimized UI with camera controls and QR code pairing
      - Docker Compose orchestration with profiles for wasm/server
      - YOLO-based detection (YOLOv4/YOLOv5) and COCO dataset support
      - Detection configuration: confidence/nms/input size available in detection-engine.js
      - Performance monitoring (FPS, latency) and adjustable thresholds

      🛠️ Tech & Requirements
      - Frontend: JavaScript Web App (WebRTC + ONNX Runtime Web)
      - Server Mode: Python (Flask), ONNX models, optional CUDA/GPU
      - Deployment: Docker + docker-compose with wasm/server profiles
      - Models: ONNX YOLOv4 (large) or smaller YOLOv5 options (recommended for WASM)

      ⚙️ Quick Start (summary)
      - Download models (scripts/download_models.sh)
      - Run docker compose with desired profile: wasm or server
      - Desktop viewer: http://localhost:3000 ; Mobile camera: http://[YOUR_IP]:3000/phone

      🔐 Notes
      - WASM mode keeps video local (privacy friendly) but is limited by browser performance
      - Server mode enables GPU acceleration and larger models
    `,
    tags: ["WebRTC", "ONNX Runtime", "Docker", "WASM", "Python", "YOLO", "Socket.IO", "Docker Compose"],
    github: "https://github.com/bhanuprakashpeddi-1432/Object_detection_WebRTC",
    liveDemo: "",
    features: ["Real-time Video Streaming", "WASM Inference (Browser)", "Server Inference (Python/GPU)", "Docker Compose Profiles", "YOLO Object Detection", "Performance Monitoring", "Mobile Camera Support"]
  },
  {
    title: "Udyam Registration Form Clone",
    description: "Full-stack clone of the Udyam Registration portal (steps 1–2) with a Python scraper that extracts form schema and a Next.js + TypeScript frontend rendering schema-driven forms with real-time validation.",
    detailedDescription: `
      🎓 Project Overview
      A comprehensive clone of the Udyam Registration first two steps that extracts the original form schema via a Python scraper and renders responsive, schema-driven forms in a Next.js + TypeScript frontend. Backend uses Node/Express + Prisma and PostgreSQL for storage.

      ✨ Key Features
      - Python web scraper to extract form fields, validation rules, and generate TypeScript/Zod schemas
      - Responsive frontend built with Next.js, TypeScript, Tailwind CSS and Shadcn/ui
      - RESTful backend (Node.js + Express) with PostgreSQL (Prisma ORM)
      - Real-time validation (client + server) using Zod and React Hook Form
      - Comprehensive testing: Jest for JS, pytest for Python
      - Dockerized setup and deployment guides

      🛠️ Tech Stack
      - Frontend: Next.js 14 + TypeScript, Tailwind CSS, Zod + React Hook Form
      - Backend: Node.js 18+, Express, Prisma, PostgreSQL
      - Scraper: Python (BeautifulSoup, Requests, Selenium)
      - CI / Deployment: Docker Compose, recommended cloud providers (Vercel/Railway/Heroku)

      ⚙️ Quick Start (summary)
      - Run scraper: web-scraper/scraper.py to generate JSON schema and TS types
      - Backend: npm install, npm run db:setup, npm run dev
      - Frontend: cd frontend, npm install, npm run dev
      - Docker: docker-compose up --build

      📚 Notes
      - The scraper outputs TypeScript interfaces and Zod schemas for the frontend
      - Tests and docs are included for frontend, backend and scraper modules
    `,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Express", "Python", "Web Scraping", "Zod", "Docker"],
    github: "https://github.com/bhanuprakashpeddi-1432/UdhyamRegistration_Clone",
    liveDemo: "",
    features: ["Form Schema Scraper", "Schema-driven Forms", "Real-time Validation", "REST API Backend", "TypeScript + Zod Schemas", "Docker Support", "Testing Suite"]
  },
  {
    title: "Expense Tracker",
    description: "JavaScript-based expense tracking application repository. See repository README for full details and setup instructions.",
    detailedDescription: `
      💰 Project Overview
      Expense Tracker repository built primarily with JavaScript (frontend + backend). The repository contains backend dependencies and likely implements features for logging expenses, categorization and reporting.

      ⚠️ Note
      A top-level README was not found in the repository root; this entry uses available repository metadata to provide a short summary. For full details, run the project's README or open the repository URL.

      🔗 Where to find more
      - Repository: https://github.com/bhanuprakashpeddi-1432/Expense-Tracker
    `,
    tags: ["JavaScript", "Node.js", "Frontend", "Backend"],
    github: "https://github.com/bhanuprakashpeddi-1432/Expense-Tracker",
    liveDemo: "",
    features: ["Expense Logging", "Categorization", "Reports / Charts (likely)", "Backend API (likely)"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-container"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="projects-header"
      >
        <div className="header-title-row">
          <FaProjectDiagram className="section-icon" />
          <h2 className="projects-title">My Projects</h2>
        </div>
      </motion.div>
      
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
              <button
                onClick={() => openModal(project)}
                className="project-button more-info-btn"
                aria-label={`More info about ${project.title}`}
              >
                <FaInfoCircle /> More Info
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Modal */}
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <h2>{selectedProject.title}</h2>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>Description</h3>
                <p>{selectedProject.detailedDescription}</p>
              </div>
              
              <div className="modal-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-button primary"
                >
                  <FaGithub /> View Code
                </a>
                {selectedProject.liveDemo && (
                  <a 
                    href={selectedProject.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-button secondary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}

export default Projects;