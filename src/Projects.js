import './Styles.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <ul>
        <li className="project-item">
          <h2>Project 01: iCrop (Group)</h2>
          <p>
            A Mobile Application Designed for recommending suitable crops for farmers based on market prices according to geographic
            locations, and specific months. The application will be developed with a user-friendly interface, ensuring accessibility for farmers
            with varying levels of technological proficiency and available resources.
          </p>
          <p>Technologies: Flutter Framework, Firebase Firestore</p>
        </li>
        <li className="project-item">
          <h2>Project 02: Expense Tracker (Individual)</h2>
          <p>
            A website designed for tracking expenses of users. Through that, users can calculate the total of expenses.
          </p>
          <p>Technologies: HTML, CSS, JavaScript</p>
        </li>
        <li className="project-item">
          <h2>Project 03: Voltora - UI/UX Design (Group)</h2>
          <p>
            This is a UI/UX designed for a website that revolutionizes this landscape by introducing a user-centric and visually engaging platform
            for electronic and appliance enthusiasts.
          </p>
          <p>Tools: Figma</p>
        </li>
        <li className="project-item">
          <h2>Project 04: LinkPlus (Group)</h2>
          <p>
            A website developed for alumni networking and career opportunities. This includes features such as secure user authentication,
            alumni profiles, a search and connect function, private messaging, event management, discussion forums, and a job board.
          </p>
          <p>Technologies: Laravel Framework (HTML, CSS), PHP, MySQL (Database)</p>
        </li>
        <li className="project-item">
          <h2>Project 05: EquipZone (Group) - Ongoing</h2>
          <p>
            A web application designed for managing sports equipment effectively to ensure that resources are optimally utilized and
            maintained in the sports center of Sabaragamuwa University of Sri Lanka.
          </p>
          <p>Technologies: React.js, TestNG, Python Fast API, Vercel</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;


