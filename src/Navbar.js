import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Make sure to import the icon at the top
import './Navbar.css'; // Ensure your CSS file path is correct

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/seasonal-calendar">Seasonal Calendar</Link>

      <Link to="/login"><FaUserCircle className="loginIcon" /></Link>
      {/* Add other navigation links as needed */}
      
       
      
    </nav>
  );
}

export default Navbar;
