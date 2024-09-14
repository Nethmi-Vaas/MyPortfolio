import './Styles.css'; // Importing CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am an enthusiastic IT undergraduate with strong communication skills and a dedication to punctuality. I thrive on exploring new
        experiences and bring a focused approach to everything I do, ensuring that tasks are completed neatly and accurately. My
        proactive attitude and attention to detail drive me to consistently deliver quality results. Skilled at using my technical knowledge
        to work well in changing environments, always looking for ways to grow and learn.
      </p>
      <h2>Education</h2>
      <p>
        <strong>B.Sc. (Hons) in Computing and Information Systems</strong><br />
        Sabaragamuwa University of Sri Lanka<br />
        2022- Present
      </p>
      <p>
        <strong>Aquinas Diploma in English Language and Literature</strong><br />
        BCI Campus, Negombo<br />
        2022 Jan - 2022 Oct
      </p>
      <p>
        <strong>G.C.E Advanced Level</strong><br />
        Dammissara National College, Naththandiya<br />
        Common Stream<br />
        2020
      </p>
      <h2>Skills</h2>
      <p><strong>Technical Skills</strong></p>
      <ul>
        <li><b>Programming Languages</b><br />
          HTML, CSS, JavaScript, PHP</li>
        <li><b>Frameworks and libraries</b><br />
          Flutter, ReactJs</li>
        <li><b>Databases</b><br />
          MongoDB, Firestore
        </li>
        <li><b>Technologies and Tools</b><br />
          Firebase, Git (Version controlling), Figma, Trello, PowerBI, Excel</li>
      </ul>
      <p><strong>Soft Skills</strong></p>
      <ul>
        <li>Decision making</li>
        <li>Teamwork</li>
        <li>Problem solving</li>
        <li>Adaptability</li>
        <li>Communication</li>
      </ul>

      <h2>Volunteering</h2>
      <p>
        <strong>Society of Computer Science</strong><br />
        Active member<br />
        2022 - present
      </p>
      <p>
        <strong>IEEE WIE Student Branch of SUSL</strong><br />
        Volunteer<br />
        2024
      </p>
    </div>
  );
};

export default About;
