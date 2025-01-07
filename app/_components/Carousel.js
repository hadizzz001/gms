"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slides = [
  {
    id: 1,
    image: "https://ucarecdn.com/0fdff874-94e0-4431-94b2-7a7c9ddf96ae/001.jpg",
    topLine: "Diesel Generators for Sale",
    bottomLine: "Supply of prime and standby generators of all sizes",
    link: "/about",
  },
  {
    id: 2,
    image: "https://ucarecdn.com/55ec097a-5cc6-4558-860b-171b85983989/002.jpg",
    topLine: "Generator Maintenance",
    bottomLine: "Standard and tailored maintenance packages to your requirements",
    link: "/products",
  },
  {
    id: 3,
    image: "https://ucarecdn.com/8954c241-999c-4dbc-ae65-39219af76398/003.jpg",
    topLine: "Generator Sales & Hire",
    bottomLine: "Nationwide generator hire",
    link: "/products",
  },
  {
    id: 4,
    image: "https://ucarecdn.com/5be55db1-e44d-456b-8c4c-d0d0f6385a4b/004.webp",
    topLine: "Generators Parts",
    bottomLine: "Generators parts ensure reliable performance.",
    link: "/products",
  },
  {
    id: 5,
    image: "https://ucarecdn.com/e2d0f776-ae00-4910-aa4a-ce5f5934c402/005.jpg",
    topLine: "GMS Power Generators",
    bottomLine: "Generator specialists since 1984",
    link: "/about",
  },
];

const MyCarousel = () => {
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
              src={slide.image}
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
                  {slide.bottomLine}
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

      {/* Add this style for dots */}
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
            .slick-dots li button{
            background: white;
            }
            
        `}
      </style>
    </div>
  );
};

export default MyCarousel;
