import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS configuration - Replace with your actual keys from https://emailjs.com
  const EMAILJS_SERVICE_ID = 'service_rsmcrh6'; // Replace with your service ID from EmailJS
  const EMAILJS_TEMPLATE_ID = 'template_6ncz4fr'; // Replace with your template ID from EmailJS
  const EMAILJS_PUBLIC_KEY = '2ZF_fH7yO9nJqn7jC'; // Replace with your public key from EmailJS

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Clear form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bhanu_Prakash_Peddi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "bhanuprakashpeddi5@gmail.com",
      link: "mailto:bhanuprakashpeddi@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9121086544",
      link: "tel:+919121086544"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Vijayawada, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhanu-prakash-peddi",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/bhanuprakashpeddi-1432",
      color: "#ffffff"
    }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-container"
    >
      {/* Background elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="contact-circle"
          style={{
            '--size': `${25 + i * 6}px`,
            '--opacity': `${0.03 + i * 0.01}`,
            '--delay': `${i * 0.4}s`,
            '--color': i % 2 === 0 ? 'rgba(0, 240, 255, var(--opacity))' : 'rgba(255, 0, 255, var(--opacity))'
          }}
        />
      ))}

      <div className="contact-content">
        <motion.div
          className="contact-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="contact-title">Get In <span>Touch</span></h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? I'd love to hear from you!
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="contact-main">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              {/* <h4>Follow Me</h4> */}
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                className="resume-download-btn"
                onClick={handleResumeDownload}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Download Resume (PDF)"
              >
                ⬇
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p>&copy; 2025 Bhanuprakash Peddi. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
