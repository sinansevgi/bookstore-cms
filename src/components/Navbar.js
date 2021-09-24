import React from 'react';
import '../assets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <a className="logo" href="./">Bookstore CMS</a>
    <ul>
      <ul>
        <li><a href="./">BOOKS</a></li>
        <li><a href="./">CATEGORIES</a></li>
      </ul>
    </ul>
    <span id="social-link" className="material-icons">
      person
    </span>
  </nav>
);

export default Navbar;
