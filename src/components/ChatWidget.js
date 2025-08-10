import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Bhanu's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const botResponses = {
    greetings: [
      "Hello! Thanks for visiting Bhanu's portfolio!",
      "Hi there! I'm here to help you learn more about Bhanu.",
      "Hey! Great to meet you. What would you like to know?"
    ],
    about: [
      "Bhanu Prakash Peddi is a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
      "He's currently pursuing his studies while working on innovative projects in web development and software engineering.",
      "Bhanu loves solving complex problems and building user-friendly applications."
    ],
    skills: [
      "Bhanu's technical skills include React, Node.js, MongoDB, Express, JavaScript, Python, Java, and more!",
      "He's proficient in both frontend and backend development, with experience in modern frameworks and databases.",
      "His skill set covers web development, database management, API development, and UI/UX design."
    ],
    projects: [
      "Bhanu has worked on several exciting projects including a Grievance Management System, Smart Inventory Management, and Online Course Management System.",
      "His projects showcase expertise in MERN stack, Spring Boot, and modern web technologies.",
      "You can check out his GitHub profile to see all his projects and contributions!"
    ],
    contact: [
      "You can reach Bhanu through the contact section below, or connect with him on LinkedIn and GitHub.",
      "Feel free to send him a message if you'd like to collaborate on projects or discuss opportunities!",
      "He's always open to networking and discussing new technologies."
    ],
    default: [
      "That's an interesting question! You might want to explore the portfolio sections or contact Bhanu directly for more specific information.",
      "I'm still learning! For detailed technical questions, I'd recommend reaching out to Bhanu directly through the contact form.",
      "Great question! While I can provide general information, Bhanu would be the best person to give you a detailed answer."
    ]
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    } else if (message.includes('about') || message.includes('who is') || message.includes('tell me about')) {
      return botResponses.about[Math.floor(Math.random() * botResponses.about.length)];
    } else if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    } else if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    } else if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <FaRobot className="bot-icon" />
                <div>
                  <h3>AI Assistant</h3>
                  <span className="status">Online</span>
                </div>
              </div>
              <button className="close-btn" onClick={toggleChat}>
                <FaTimes />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="message-avatar">
                    <FaRobot />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
              <div className="input-group">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Bhanu's skills, projects, or experience..."
                  rows="1"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className="send-btn"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
