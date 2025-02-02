"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MyCarousel = () => {
  const [slides, setSlides] = useState([]);

  // Fetch data from API
  const fetchSlides = async () => {
    try {
      const response = await fetch("/api/homeB");
      const data = await response.json();

      const formattedSlides = data.map((item) => ({
        id: item.id, // Assuming `id` exists in the API response
        image: item.img[0],
        topLine: item.name,
        bottomLine: item.desc,
        link: item.link || "#", // Use "#" as a fallback if `link` is missing
      }));
      setSlides(formattedSlides);
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-carousel" style={{ width: "100%", position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="hero-carousel__slide" style={{ position: "relative" }}>
            <img
            src={`/api/proxy?url=${slide.image}`}  
              alt={slide.topLine}
              className="hero-carousel__image"
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
            />
            <div
              className="hero-carousel__overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "120%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="slide-inner"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <h1
                  className="hero-carousel__top-line"
                  style={{
                    fontWeight: 900,
                    textTransform: "uppercase",
                  }}
                >
                  {slide.topLine}
                </h1>
                <p
                  className="hero-carousel__bottom-line"
                  style={{
                    fontSize: "1.2rem",
                    maxWidth: "80%",
                  }}
                >
                  <div
                    className="prose lg:prose-xl max-w-[500px] custom-list"
                    style={{ maxWidth: '500px' }}
                    dangerouslySetInnerHTML={{ __html: slide.bottomLine }}
                  />
                </p>
                <a
                  href={slide.link}
                  className="button btn123"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>
        {`
          .slick-dots {
            bottom: 20px;
          }

          .slick-dots li button:before {
            font-size: 10px;
            color: white;
            opacity: 1;
          }

          .slick-dots li.slick-active button:before {
            color: #007bff;
          }
          .slick-dots li button {
            color: white;
            width: 10px;
            height: 10px; 
          }
          .slick-dots li button {
            background: white;
          }
        `}
      </style>
    </div>
  );
};

export default MyCarousel;
