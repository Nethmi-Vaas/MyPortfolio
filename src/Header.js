// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Styles.css';

function Header() {
  return (
    <header className='header'>
      <h1>Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Use Link for internal navigation */}
          <li><Link to="/about">About</Link></li> {/* Use Link for internal navigation */}
          <li><Link to="/projects">Projects</Link></li>
<li><a href="/contact">Contact</a></li> {/* External link can use a */}
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;