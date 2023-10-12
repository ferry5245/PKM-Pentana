// components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
        <Link to="/"><img
          src={Logo}
          alt="PKM Smartboat"
          height="60%" />
        </Link>
        <div>
          <Link to="/">Beranda</Link>
          <Link to="/smartboat">Tentang Smartboat</Link>
          <Link to="/tracking">Pelacakan Nelayan</Link>
          {/* <Link to="/">Hubungi Kami</Link> */}
        </div>
    </header>
  );
}

export default Header;
