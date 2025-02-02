import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faTiktok, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__inner">
        <div className="top-footer">
          <div className="footer-column logo-column">
            <a href="/">
              <img
                alt="Standby Generators Emergency Diesel Power Generator sales London Essex Hertfordshire"
                src="/api/proxy?url=https://ucarecdn.com/f3eebafc-fc8d-4343-8216-c92ce1f82962/logowhite.png"
              />
            </a>
            <div className="socials">
            <ul className="socials">
      <li className="socials__icon">
        <a href="http://www.facebook.com/GeneratedPowerServices" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" style={{color:'white'}}/>
        </a>
      </li>
      <li className="socials__icon">
        <a href="http://www.twitter.com/gps_limited" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon"  style={{color:'white'}}/>
        </a>
      </li>
      <li className="socials__icon">
        <a href="http://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" style={{color:'white'}}/>
        </a>
      </li>
      <li className="socials__icon">
        <a href="http://www.tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="social-icon" style={{color:'white'}}/>
        </a>
      </li>
      <li className="socials__icon">
        <a href="http://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" style={{color:'white'}}/>
        </a>
      </li>
    </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-heading">ADDRESS</div>
            <div className="address">
              <p>
                Naher El Mot
                <br />
                Lebanon
              </p>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-heading">QUICK LINKS</div>
            <div className="nav-wrapper">
              <ul id="menu-footer-nav" className="menu">
                <li id="menu-item-333" className="menu-item">
                  <a href="/" aria-current="page">Home</a>
                </li>
                <li id="menu-item-331" className="menu-item">
                  <a href="/about">About Us</a>
                </li>
                <li id="menu-item-662" className="menu-item">
                  <a href="/products">Products</a>
                </li>
                <li id="menu-item-329" className="menu-item">
                  <a href="/services">Services</a>
                </li>
                <li id="menu-item-332" className="menu-item">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="left-column">
            <p>© {new Date().getFullYear()} GMS Power Generation</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
