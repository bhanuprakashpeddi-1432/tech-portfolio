import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";
import "./Home.css";
import profileImage from "../styles/myimg.png"; // Update with your image path

const Home = () => {
  const textRef = useRef(null);
  const circlesRef = useRef([]);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Text typing animation
    anime({
      targets: textRef.current,
      innerHTML: ["", "Hi, I'm <span style='color: #00f0ff'>Bhanu Prakash Peddi</span>"],
      duration: 2000,
      easing: "easeInOutQuad",
      update: function(anim) {
        textRef.current.innerHTML = anim.animations[0].currentValue;
      }
    });

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Animated background elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={el => circlesRef.current[i] = el}
          className="tech-circle"
          style={{
            '--size': `${50 + i * 10}px`,
            '--blur': `${5 + i}px`,
            '--opacity': `${0.1 + i * 0.03}`,
            '--delay': `${i * 0.2}s`,
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
          <h1 ref={textRef} className="hero-title">Bhanu Prakash Peddi</h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Full-Stack Developer | Software Developer
          </motion.p>
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
            alt="Bhanu Prakash Peddi" 
            className="full-image"
          />
          <div className="circle-overlay" />
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
    </motion.div>
  );
};

export default Home;