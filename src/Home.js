import './Styles.css'; // Importing the new CSS file
import profileImage from './assets/Untitled desi.png'; // Correct relative path

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1><i>Welcome to My Portfolio</i></h1>
        <p className="intro-text">
          <span className="hello-text"><i>Hello,</i></span> It's me <span className="name-text">Nethmi Vaas</span>
        </p>
        <a href="/Nethmi Vaas (Resume).pdf" download="Nethmi_Vaas_CV.pdf">
    <button className="download-button">Download CV</button>
</a>

      </div>
      <div className="image-section">
        <img src={profileImage} alt="My Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Home;