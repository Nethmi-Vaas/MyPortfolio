// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className='header'>
      <h1>Nethmi Vaas</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Use Link for internal navigation */}
          <li><Link to="/about">About</Link></li> {/* Use Link for internal navigation */}
          <li><Link to="/projects">Projects</Link></li>
<li><a href="/contact">Contact</a></li> {/* External link can use a */}
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;