import './Styles.css'; // Importing CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I’m Jane Doe, a Full Stack Web Developer with a passion for building innovative and efficient web applications. With a background in both front-end and back-end development, I’m skilled in creating responsive, user-friendly interfaces and robust server-side solutions.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+), React.js, Node.js</li>
        <li>HTML5, CSS3, SASS</li>
        <li>RESTful APIs, GraphQL</li>
        <li>Database Management (MongoDB, SQL)</li>
        <li>Version Control (Git, GitHub)</li>
      </ul>
      <h2>Education</h2>
      <p>
        Bachelor of Science in Computer Science - XYZ University<br />
        Graduated: 2020
      </p>
      <h2>Experience</h2>
      <p>
        - Web Developer Intern at ABC Corp (2021 - 2022)<br />
        - Freelance Web Developer (2022 - Present)
      </p>
    </div>
  );
};

export default About;
