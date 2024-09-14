import './Styles.css'; 
const Projects = () => {
    return (
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul>
          <li className="project-item">
            <h2>Project 1: Portfolio Website</h2>
            <p>
              Developed a personal portfolio website using React.js. The website features a responsive design, interactive elements, and a contact form. Implemented modern UI/UX principles to showcase my skills and projects effectively.
            </p>
          </li>
          <li className="project-item">
            <h2>Project 2: E-commerce Platform</h2>
            <p>
              Built a fully functional e-commerce platform with Node.js and MongoDB. Included features such as product catalog, shopping cart, and user authentication. Focused on creating a scalable backend and a user-friendly frontend.
            </p>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Projects;