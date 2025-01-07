import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__inner">
        <div className="top-footer">
          <div className="footer-column logo-column">
            <a href="/">
              <img
                alt="Standby Generators Emergency Diesel Power Generator sales London Essex Hertfordshire"
                src="https://ucarecdn.com/f3eebafc-fc8d-4343-8216-c92ce1f82962/logowhite.png"
              />
            </a>
            <div className="socials">
              <ul>
                <li className="socials__icon icon--facebook">
                  <a href="http://www.facebook.com/GeneratedPowerServices" target="_blank" />
                </li>
                <li className="socials__icon icon--twitter">
                  <a href="http://www.twitter.com/gps_limited" target="_blank" />
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
