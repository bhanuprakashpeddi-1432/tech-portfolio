import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import "./Home.css";
import profileImage from "../styles/img.png"; // Update with your image path

const Home = () => {
  const textRef = useRef(null);
  const circlesRef = useRef([]);
  const arrowRef = useRef(null);
  const [showConnectPopup, setShowConnectPopup] = useState(false);

  const handleConnectClick = () => {
    setShowConnectPopup(true);
  };

  const closePopup = () => {
    setShowConnectPopup(false);
  };

  useEffect(() => {
    // Text typing animation
    const fullText = "Hi, I'm Bhanu Prakash Peddi";
    const nameStartIndex = fullText.indexOf("Bhanu Prakash Peddi");
    let currentIndex = 0;
    
    // Clear initial content
    textRef.current.innerHTML = "";
    
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        let displayText = fullText.substring(0, currentIndex);
        
        // Add colored span for the name part
        if (currentIndex > nameStartIndex) {
          const beforeName = fullText.substring(0, nameStartIndex);
          const nameText = fullText.substring(nameStartIndex, currentIndex);
          displayText = beforeName + `<span style='color: #00f0ff'>${nameText}</span>`;
        }
        
        textRef.current.innerHTML = displayText;
        currentIndex++;
        
        if (currentIndex <= fullText.length) {
          setTimeout(typeText, 70); // Adjust speed here (lower = faster)
        }
      }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeText, 500);

    // Floating circles animation
    circlesRef.current.forEach((circle, index) => {
      anime({
        targets: circle,
        translateY: [-300, 300],
        translateX: index % 2 ? [-200, 200] : [200, -200],
        duration: 400 + index * 500,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        delay: index * 200,
      });
    });

    // Scroll arrow animation
    anime({
      targets: arrowRef.current,
      translateY: [-10, 10],
      duration: 1500,
      loop: true,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Animated background elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => circlesRef.current[i] = el}
          className="tech-circle"
          style={{
            '--size': `${40 + i * 8}px`,
            '--blur': `${3 + i}px`,
            '--opacity': `${0.05 + i * 0.02}`,
            '--delay': `${i * 0.5}s`,
            '--color': i % 2 ? 'rgba(0, 240, 255, var(--opacity))' : 'rgba(255, 0, 255, var(--opacity))'
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      {/* Main content container */}
      <div className="content-wrapper">
        {/* Left side - Text content */}
        <motion.div 
          className="text-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 ref={textRef} className="hero-title">Hi, I'm Bhanu Prakash Peddi</h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Full-Stack Developer | Software Developer
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            className="action-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              className="btn btn-outline"
              onClick={handleConnectClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - Image with circular overlay */}
        <motion.div 
          className="image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <img 
            src={profileImage} 
            alt="Bhanu Prakash Peddi - Full Stack Developer" 
            className="full-image"
          />
          <div className="circle-overlay" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div 
        ref={arrowRef}
        className="scroll-down-arrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>

      {/* Connect popup */}
      {showConnectPopup && (
        <motion.div 
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div 
            className="connect-popup"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closePopup}>×</button>
            <h3>Let's Connect!</h3>
            <p>Find me on these platforms:</p>
            <div className="social-links">
              <a 
                href="https://linkedin.com/in/bhanu-prakash-peddi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              <a 
                href="https://github.com/bhanuprakashpeddi-1432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home;