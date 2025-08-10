import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./GitHubContributions.css";

const GitHubContributions = ({ username = "bhanuprakashpeddi-1432" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const contributionUrl = `https://ghchart.rshah.org/${username}`;

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <motion.section
      id="github-contributions"
      className="github-contributions"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contributions-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="header-title-row">
            <FaGithub className="section-icon" />
            <h2>GitHub Contributions</h2>
          </div>
          <p>My coding journey throughout the year</p>
        </motion.div>

        <motion.div
          className="contributions-chart-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {!imageError ? (
            <div className="chart-container">
              <img
                src={contributionUrl}
                alt={`${username}'s GitHub contribution chart`}
                className={`contributions-chart ${isLoaded ? 'loaded' : ''}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {!isLoaded && (
                <div className="chart-loading">
                  <div className="loading-skeleton"></div>
                  <p>Loading contributions...</p>
                </div>
              )}
            </div>
          ) : (
            <div className="chart-error">
              <FaGithub className="error-icon" />
              <p>Unable to load contribution chart</p>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View GitHub Profile
                <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </motion.div>

        <motion.div
          className="github-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <FaExternalLinkAlt />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubContributions;
