import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";
import "./About.css";

const About = () => {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate text on scroll
    anime({
      targets: textRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo"
    });

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      anime({
        targets: card,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 200 + index * 150,
        easing: "easeOutExpo"
      });
    });
  }, []);

  const aboutData = [
    {
      title: "Education",
      content: "Bachelor's in Computer Science with focus on Software Development and Data Structures",
      icon: "🎓"
    },
    {
      title: "Passion",
      content: "Building scalable applications and exploring new technologies to solve real-world problems",
      icon: "🚀"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-container"
    >
      {/* Animated background elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="about-circle"
          style={{
            '--size': `${30 + i * 8}px`,
            '--opacity': `${0.05 + i * 0.02}`,
            '--delay': `${i * 0.3}s`,
            '--color': i % 3 === 0 ? 'rgba(0, 240, 255, var(--opacity))' : 
                      i % 3 === 1 ? 'rgba(255, 0, 255, var(--opacity))' : 
                      'rgba(0, 255, 150, var(--opacity))'
          }}
        />
      ))}

      <div className="about-content">
        <motion.div
          ref={textRef}
          className="about-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="about-title">About <span>Me</span></h2>
          <p className="about-description">
            I am a passionate full-stack developer with expertise in building dynamic,
            responsive, and scalable web applications. I love turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="about-cards">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="about-card"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0, 240, 255, 0.2)"
              }}
            >
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-content">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
