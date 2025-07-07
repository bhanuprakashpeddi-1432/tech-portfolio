import { motion } from "framer-motion";
import "./Loading.css";

const Loading = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>BP</span>
        </motion.div>
        
        <motion.div
          className="loading-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading Portfolio...
        </motion.div>
        
        <div className="loading-bar">
          <motion.div
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        
        <div className="loading-dots">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-dot"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
