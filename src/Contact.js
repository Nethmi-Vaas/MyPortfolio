import './Styles.css'; // Importing CSS file
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+94(76)-4264240</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">anuvaas15@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/nethmi-vaas-1644072b2" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/Nethmi-Vaas" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

