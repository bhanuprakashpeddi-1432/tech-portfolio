import React from "react";
import { motion } from "framer-motion";
import "./SectionSeparator.css";

const SectionSeparator = ({ variant = "default" }) => {
  return (
    <motion.div
      className={`section-separator ${variant}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="separator-line">
        <div className="separator-glow"></div>
      </div>
    </motion.div>
  );
};

export default SectionSeparator;
