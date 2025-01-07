"use client";


import Header from "./_components/Header";
import Carousel from "./_components/Carousel";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandCarousel from "./_components/BrandCarousel";
import Footer from "./_components/Footer";
import ProductsCarousel from "./_components/ProductsCarousel";


export default function Home() {




  return (
    <>
      <div className="site-wrapper">
        <Header />



        <Carousel />















        <div className="section--cta" style={{ backgroundColor: "#0b5cad" }}>
          <div className="section--cta section--cta--inner">
            <h3 className="section--title section--title--white">
              GMS - More Power to You
            </h3>
            <h1 style={{ textAlign: "center" }}>
              <strong>Generator specialist since 1984</strong>
            </h1>
            <p style={{ textAlign: "center" }}>
  GMS is a family-run business based in Lebanon, specializing in the sale, supply, installation, repair, and hire of diesel generators.
</p>
<p style={{ textAlign: "center" }}>
  With over 35 years of experience, our skilled team has been assisting customers with their generator needs. Our expertise in the generator industry allows us to provide tailored advice to meet your specific requirements, regardless of scale.
</p>
<p style={{ textAlign: "center" }}>
  Whether you need generator overhauls, one-off maintenance visits, tailored service contracts, or generators for sale, we are committed to delivering the right solutions every time.
</p>

          </div>
        </div>
        <div className="section section--services">
          <div className="services-intro">
            <h3 className="section--title">Our Services</h3>
          </div>
          <div className="services">
            <div className="services__service">
              <div className="service-image">
                <img
                  alt="Diesel Power Generators for Sale Nationwide Standby Generators Emergency Diesel Power Generators for sale London Essex Hertfordshire for sale"
                  src="https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg"
                />
              </div>
              <h3 className="service-title">Generators for Sale </h3>
              <div className="service-content">
                <h4 style={{ textAlign: "center" }}>
                  Generators for sale from 2.0 kVa to 2500 kVa
                </h4>
              </div>
              <div className="services-button">
                <a href="index.html@p=319.html" className="button">
                  More about Sales
                </a>
              </div>
            </div>
            <div className="services__service">
              <div className="service-image">
                <img
                  alt="Diesel Generators for Sale Diesel generator maintenance Standby Generators Emergency Diesel Power Generator sales London Essex Hertfordshire Nationwide"

                  src="https://ucarecdn.com/cbeb99d7-761d-41ed-b0b1-9ff2042ef69d/DieselGeneratormaintenace.jpg"
                />
              </div>
              <h3 className="service-title">Generator Maintenance and services </h3>
              <div className="service-content">
                <h4 style={{ textAlign: "center" }}>
                  One off service or tailored maintenance contracts
                </h4>
              </div>
              <div className="services-button">
                <a href="index.html@p=124.html" className="button">
                  More about Maintenance
                </a>
              </div>
            </div>
            <div className="services__service">
              <div className="service-image">
                <img
                  alt="Diesel generator rental Standby Generators for sale Emergency Diesel Power Generator sales London Essex Hertfordshire"
                  src="https://ucarecdn.com/c43d1ecf-a648-4365-906c-a24109dfb0b4/Generatorhirerental.jpg"
                />
              </div>
              <h3 className="service-title">Nationwide Generator Hire </h3>
              <div className="service-content">
                <h4 style={{ textAlign: "center" }}>
                  Nationwide generator hire from 2.5 to 1500 kVa
                </h4>
              </div>
              <div className="services-button">
                <a href="index.html@p=315.html" className="button">
                  More about Hire
                </a>
              </div>
            </div>
            <div className="services__service">
              <div className="service-image">
                <img
                  alt="Standby Generators Emergency Diesel Power Generators for sale London Essex Hertfordshire"
                  src="https://ucarecdn.com/d7382f42-de5c-46c2-beea-10451f90ad39/GPSContactus.jpg"
                />
              </div>
              <h3 className="service-title">Contact GPS </h3>
              <div className="service-content">
                <h4 style={{ textAlign: "center" }}>Speak to our team</h4>
              </div>
              <div className="services-button">
                <a href="index.html@p=68.html" className="button">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>


        <BrandCarousel />


        <ProductsCarousel />






        <div className="footer-top">
          TO DISCUSS YOUR NEEDS CALL <a href="tel:+9613502927">03502927</a> |{" "}
          <a href="mailto:sales@gps-ltd.com">SALES@GPS-LTD.COM</a>{" "}
        </div>
        <Footer />
      </div>

 

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.main-footer__inner .top-footer .footer-column .menu li a:hover {\n    color: #0b5cad;\n}\n"
        }}
      />



    </>

  );
}
