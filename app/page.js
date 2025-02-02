"use client";


import Header from "./_components/Header";
import Carousel from "./_components/Carousel";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandCarousel from "./_components/BrandCarousel";
import Footer from "./_components/Footer";
import ProductsCarousel from "./_components/ProductsCarousel";


export default function Home() {
  const [desc, setDesc] = useState("");
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch("api/homeA");
        const data = await response.json();
        setDesc(data[0].desc);
        console.log("data are: ", data);

      } catch (error) {
        console.error("Error fetching the description:", error);
      }
    };

    fetchDescription();
  }, []);


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("api/homeS"); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServicesData(data); // Set the services data to state
      } catch (err) {
        setError(err.message); // Capture any errors during the fetch
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchServices();
  }, []); // The empty array ensures this effect runs only once, like componentDidMount

  if (loading) {
    return <p>Loading services...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }



  return (
    <>
      <div className="site-wrapper">
        <Header />



        <Carousel />















        <div className="section--cta" style={{ backgroundColor: "#0b5cad" }}>
          <div className="section--cta section--cta--inner">
            {/* Dynamically inserted description */}
            {desc && (
              <p style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: desc }}>

              </p>
            )}
          </div>
        </div>















        <div className="section section--services">
          <div className="services-intro">
            <h3 className="section--title">Our Services</h3>
          </div>
          <div className="services">
            {servicesData.map((service, index) => (
              <div key={index} className="services__service">
                <div className="service-image">
                  <img alt={service.name}   src={`api/proxy?url=${service.img[0]}`}/>
                </div>
                <h3 className="service-title">{service.name}</h3>
                <div className="service-content">
                  <h4 style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: service.desc }}> 
                  </h4>
                </div>
                <div className="services-button">
                  <a href={service.link} className="button">
                    More about {service.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>


        <BrandCarousel />


        <ProductsCarousel />






        <div className="footer-top">
          TO DISCUSS YOUR NEEDS CALL <a href="tel:+96171040388">71040388</a> |{" "}
          <a href="mailto:services@gmspowergeneration.com">services@gmspowergeneration.com</a>{" "}
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
