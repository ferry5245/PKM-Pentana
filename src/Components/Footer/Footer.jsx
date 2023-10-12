// components/Footer/Footer.jsx
import React, { useState } from 'react';
import './Footer.scss';
import Indonesia from "../../assets/icon_Indonesia.svg";
import UK from "../../assets/icon_uk.svg";
import IG from "../../assets/instagram.svg";
import Tiktok from "../../assets/tiktok.png";

function Footer() {
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
            <a href="https://instagram.com/smartboat_pentana" target="_blank">
              <img src={ IG } alt="Bahasa" />
            </a>
            <a href="https://www.tiktok.com/@smartboat_pentana" target="_blank">
              <img src={ Tiktok } alt="English" />
            </a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
