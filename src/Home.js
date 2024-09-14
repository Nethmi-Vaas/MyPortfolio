import './Styles.css'; // Importing CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am Jane Doe, a passionate Full Stack Web Developer. With a strong
          background in both front-end and back-end technologies, I specialize in
          creating intuitive and dynamic user experiences while maintaining robust and efficient server-side logic.
        </p>
        <p>
          I have a deep love for coding, problem-solving, and continuous learning.
          I’ve worked on various projects, from developing responsive websites to building powerful web applications using modern frameworks such as React, Node.js, and Laravel.
        </p>
      </div>
      <div className="image-section">
        <img src="https://via.placeholder.com/300" alt="My Profile" />
      </div>
    </div>
  );
};

export default Home;
