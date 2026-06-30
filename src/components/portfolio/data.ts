export const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "AI/ML Enthusiast",
  "Problem Solver",
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },

  { id: "contact", label: "Contact" },
];

export const SKILL_CATEGORIES = [
  {
    name: "AI / ML",
    color: "#a855f7",
    items: ["Python", "Machine Learning", "PyTorch", "TensorFlow", "scikit-learn"],
  },
  {
    name: "Frontend",
    color: "#06b6d4",
    items: ["React", "Next.js", "JavaScript", "CSS"],
  },
  {
    name: "Backend",
    color: "#10b981",
    items: ["Node.js", "Java", "SpringBoot", "FastAPI"],
  },
  {
    name: "Database",
    color: "#f97316",
    items: ["SQL", "MongoDB"],
  },
  {
    name: "Cloud & Tools",
    color: "#facc15",
    items: ["AWS", "GCP", "Git"],
  },
];

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "Grievance Management System",
    description:
      "A comprehensive MERN stack application for managing and tracking grievances with real-time notifications, user authentication, and admin dashboard for efficient complaint resolution.",
    longDescription:
      "Full-featured platform with JWT authentication, role-based access (admin/user), real-time updates via Socket.io, status tracking, file attachments, email notifications, and an analytics dashboard for administrators.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI", "Socket.io", "REST API"],
    github: "https://github.com/bhanuprakashpeddi-1432/grievance-management-system",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and animated using Framer Motion and AnimeJS.",
    tags: ["React", "Framer Motion", "AnimeJS", "CSS3", "EmailJS", "SEO"],
    github: "https://github.com/bhanuprakashpeddi-1432/portfolio",
    live: "https://bhanuprakashpeddi.tech",
  },
  {
    title: "Smart Inventory Management System",
    description:
      "Inventory dashboard with charts, real-time stock tracking, and modern UI components built with React + TypeScript.",
    tags: ["React", "TypeScript", "Shadcn/ui", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/bhanuprakashpeddi-1432/Inventory_Management",
  },
  {
    title: "Online Course Management System",
    description:
      "End-to-end course platform with secure auth, enrollment, and admin tools — Spring Boot backend + React frontend.",
    tags: ["Spring Boot", "React", "MySQL", "JWT", "Bootstrap"],
    github: "https://github.com/bhanuprakashpeddi-1432/OnlineCourseManagement_System",
  },
  {
    title: "SaaS Landing Page Frontend",
    description:
      "Polished SaaS landing page with animations, modern sections, and responsive design.",
    tags: ["React", "Next.js", "Framer Motion", "CSS3"],
    github: "https://github.com/bhanuprakashpeddi-1432/SaaS_landing_page",
    live: "https://saa-s-landing-page-tan.vercel.app/",
  },
  {
    title: "WebRTC Real-Time Object Detection",
    description:
      "Real-time object detection over WebRTC streams using YOLO + ONNX Runtime with WASM acceleration, containerized with Docker.",
    tags: ["WebRTC", "ONNX Runtime", "Docker", "WASM", "Python", "YOLO"],
    github: "https://github.com/bhanuprakashpeddi-1432/Object_detection_WebRTC",
  },
  {
    title: "Udyam Registration Form Clone",
    description:
      "Pixel-perfect clone of the Udyam registration flow with multi-step form validation and Postgres persistence.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Python"],
    github: "https://github.com/bhanuprakashpeddi-1432/UdhyamRegistration_Clone",
  },
  {
    title: "Expense Tracker",
    description:
      "Lightweight expense tracking app with categorized spending and quick entry.",
    tags: ["JavaScript", "Node.js"],
    github: "https://github.com/bhanuprakashpeddi-1432/Expense-Tracker",
  },
];

export type Cert = {
  title: string;
  org: string;
  year?: string;
  status: "Completed" | "In Progress";
  tags?: string[];
  link?: string;
};

export const CERTIFICATIONS: Cert[] = [
  {
    title: "React.js — The FullStack Open",
    org: "University of Helsinki",
    year: "2023",
    status: "Completed",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"],
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/731246ccd69114e233d3fda619081b00",
  },
  {
    title: "RedHat Certified Application Developer",
    org: "Red Hat",
    year: "2024",
    status: "Completed",
    tags: ["Java", "Microservices", "OpenShift"],
    link: "https://www.credly.com/badges/533e7633-190e-43bd-9b55-aa9cac2a35d7/public_url",
  },
  {
    title: "MongoDB Developer",
    org: "MongoDB University",
    year: "2025",
    status: "Completed",
    tags: ["MongoDB", "NoSQL", "Aggregation"],
    link: "https://www.credly.com/badges/1b023772-14a1-4301-992b-848c1c841b5f/linked_in_profile",
  },
  {
    title: "Full Stack Web Development",
    org: "Coursera",
    year: "2023",
    status: "Completed",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
];

export const CODING_PROFILES = [
  {
    name: "LeetCode",
    color: "#FFA116",
    description: "Sharpening algorithms & data structures with daily problem solving.",
    url: "https://leetcode.com/u/bhanu_praksash_peddi/",
  },
  {
    name: "HackerRank",
    color: "#2EC866",
    description: "Building expertise across problem-solving and language domains.",
    url: "https://www.hackerrank.com/profile/h22000309391",
  },
  {
    name: "CodeChef",
    color: "#864214",
    description: "Competitive programming and contest participation.",
    url: "https://www.codechef.com/users/klu_2200030939",
  },
];
