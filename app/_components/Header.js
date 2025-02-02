"use client";

import { useState, useEffect, Suspense } from "react";
import Link from 'next/link'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve the cart items from localStorage and update cartCount
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cartItems.length);
  }, []);


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
              style={{ width: "70%", height: "auto", maxWidth: "initial", maxHeight: "initial" }}
              src="/api/proxy?url=https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
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
                <a href="/" aria-current="page">
                  Home
                </a>
              </li>
              <li
                id="menu-item-141"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
              >
                <a href="/about">About</a>
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

              <li id="div1" style={{ margin: 0, padding: 0 }}>
                <Link href="/checkout" style={{ padding: 0, margin: 0 }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    style={{ margin: 0, padding: 0 }}
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      {/* Display the cart count inside the circle */}
                      {cartCount > 0 && (
                        <circle
                          cx="19"
                          cy="5"
                          r="4"
                          fill="red"
                          stroke="white"
                          stroke-width="1"
                        />
                      )}
                      {cartCount > 0 && (
                        <text
                          x="19"
                          y="8"
                          font-size="4"
                          text-anchor="middle"
                          fill="white"
                          dy=".3em"
                        >
                          {cartCount}
                        </text>
                      )}
                    </g>
                  </svg>
                </Link>
              </li>


            </ul>
          </div>{" "}
        </div>




      </div>

      <div id="div2"  >
        <Link href="/checkout" style={{ padding: 0, margin: 0 }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ margin: 0, padding: 0 }}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              {/* Display the cart count inside the circle */}
              {cartCount > 0 && (
                <circle
                  cx="19"
                  cy="5"
                  r="4"
                  fill="red"
                  stroke="white"
                  stroke-width="1"
                />
              )}
              {cartCount > 0 && (
                <text
                  x="19"
                  y="8"
                  font-size="4"
                  text-anchor="middle"
                  fill="white"
                  dy=".3em"
                >
                  {cartCount}
                </text>
              )}
            </g>
          </svg>
        </Link>
      </div>

      <div className={`nav-toggle ${isNavOpen ? 'active' : ''}`}
        onClick={handleToggleNav}>

        <div className="bar" />
        <div className="bar" />
        <div className="bar" />

      </div>{" "}

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .site-header.dark .site-header__nav .menu li.current-menu-item a {\n    border: none !important;\n}\n"
        }}
      />


    </header>
  )
}

export default Header