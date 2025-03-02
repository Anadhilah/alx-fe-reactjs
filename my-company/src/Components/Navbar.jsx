// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
        width: '100%',
      display: 'flex', 
      justifyContent: 'center', // Center the navbar items
      alignItems: 'center', // Vertically center the items (optional)
      backgroundColor: '#333', 
      padding: '10px'
    }}>
      <ul style={{
        display: 'flex', 
        listStyleType: 'none', 
        padding: 0, 
        margin: 0
      }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
