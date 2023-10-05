// components/Footer/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from "../../assets/logo.png";
import Indonesia from "../../assets/icon_Indonesia.svg";
import UK from "../../assets/icon_uk.svg";
import IG from "../../assets/instagram.svg";
import Tiktok from "../../assets/tiktok.png";

function Footer() {
  // Get the username from local storage or another state management solution
  const username = localStorage.getItem('username');

  return (
    <footer className="footer">
        <div className="bahasa">
          <div>Ubah Bahasa</div>
          <div className="list-bahasa">
            <a href="#">
              <img src={ Indonesia } alt="Bahasa" />
            </a>
            <a href="#">
              <img src={ UK } alt="English" />
            </a>
          </div>
        </div>
        <div className="hubungi">
          <div>Temukan Kami!</div>
          <div className="list-sosmed">
            <a href="https://instagram.com">
              <img src={ IG } alt="Bahasa" />
            </a>
            <a href="#">
              <img src={ Tiktok } alt="English" />
            </a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
