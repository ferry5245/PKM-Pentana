// components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from "../../assets/logo.png";

function Header() {
  // Get the username from local storage or another state management solution
  const username = localStorage.getItem('username');

  return (
    <header className="header">
        <Link to="/"><img
            src={Logo}
            alt="PKM Smartboat"
            height="60%" />
        </Link>
        <Link to="/">Beranda</Link>
        <Link to="/">Tentang Smartboat</Link>
        <Link to="/">Pelacakan Nelayan</Link>
        <Link to="/">Hubungi Kami</Link>
    </header>
  );
}

export default Header;
