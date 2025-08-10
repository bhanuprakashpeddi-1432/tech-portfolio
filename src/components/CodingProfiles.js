import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import "./CodingProfiles.css";

const codingProfiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "#FFA116",
    url: "https://leetcode.com/u/bhanu_praksash_peddi/",
    description: "Algorithm & Data Structure Problems",
    stats: "Problem Solving"
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "#2EC866",
    url: "https://www.hackerrank.com/profile/h22000309391",
    description: "Coding Challenges",
    stats: "Skills Assessment"
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    color: "#864214ff",
    url: "https://www.codechef.com/users/klu_2200030939",
    description: "Programming Competitions",
    stats: "Contest Participation"
  }
];

const CodingProfiles = () => {
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

  const handleProfileClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      id="coding-profiles"
      className="coding-profiles"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="profiles-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="header-title-row">
            <FaCode className="section-icon" />
            <h2>Coding Profiles</h2>
          </div>
          <p>Connect with me on various coding platforms</p>
        </motion.div>

        <motion.div
          className="profiles-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {codingProfiles.map((profile, index) => {
            const IconComponent = profile.icon;
            
            return (
              <motion.div
                key={index}
                className="profile-card"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProfileClick(profile.url)}
                style={{ '--accent-color': profile.color }}
              >
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="profile-icon">
                    <IconComponent />
                  </div>
                  <h3 className="profile-name">{profile.name}</h3>
                  <p className="profile-description">{profile.description}</p>
                  <div className="profile-stats">
                    <span>{profile.stats}</span>
                  </div>
                  <div className="profile-link">
                    <span>Visit Profile</span>
                    <FaExternalLinkAlt />
                  </div>
                </div>
                <div className="card-glow"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CodingProfiles;
