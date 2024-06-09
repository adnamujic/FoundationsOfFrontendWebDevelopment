//components/Header.js

import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#restaurant-menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#chefs">Chefs</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
