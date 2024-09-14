import './Styles.css'; // Importing CSS file

const Resume = () => {
  return (
    <section className="resume-section">
      <h1>My Resume</h1>
      <p>
        Click the button below to download my resume in PDF format. Feel free to reach out if you have any questions or need further information.
      </p>
      <a href="/path-to-your-cv.pdf" download="Jane_Doe_Resume.pdf">
        <button className="download-button">Download CV</button>
      </a>
    </section>
  );
};

export default Resume;
