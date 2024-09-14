import './Styles.css'; // Importing CSS file
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+123 456 7890</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">jane.doe@example.com</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/jane-doe" className="contact-text" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/jane-doe" className="contact-text" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
