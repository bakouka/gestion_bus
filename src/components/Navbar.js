import React from 'react';
import './Navbar.css'; // Assurez-vous de créer un fichier CSS pour les styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src='nav2.png' ></img></div>
      <ul className="nav-links">
        <li><a href="/"> الرئيسية
</a></li>
        <li><a href="/services">خدمات</a></li>
     
        <li><a href="/contact">إتصال</a></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
