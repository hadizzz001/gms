import React from 'react'
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prevState) => !prevState);

    if (!isNavOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  };



  return (
    <header className="site-header dark">
    <div className="site-header__inner">
      <div className="site-header__logo">
        <a href="/">
          <img
            alt="Standby Generators Emergency Diesel Power Generator sales London Essex Hertfordshire" 
            className=" "
            style={{width: "70%", height: "auto", maxWidth: "initial", maxHeight: "initial"}}
            src="https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
          /> 
        </a>{" "}
      </div>
      <div className={`site-header__nav ${isNavOpen ? 'nav-open' : ''}`}>
        <div className="nav-wrapper">
          <ul id="menu-menu-1" className="menu">
            <li
              id="menu-item-35"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-18 current_page_item menu-item-35"
            >
              <a href="index.html" aria-current="page">
                Home
              </a>
            </li>
            <li
              id="menu-item-141"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
            >
              <a href="index.html@p=105.html">About</a>
            </li>
            <li
              id="menu-item-323"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-323"
            >
              <a href="/products">Products</a>
            </li>
            <li
              id="menu-item-480"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-480"
            >
              <a href="/services">Services</a>
             
            </li> 
            <li
              id="menu-item-73"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"
            >
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </div>
    <div         className={`nav-toggle ${isNavOpen ? 'active' : ''}`}
        onClick={handleToggleNav}>
      
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      
    </div>{" "}
  </header>
  )
}

export default Header