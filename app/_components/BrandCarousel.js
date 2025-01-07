import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCarousel = () => {
  const settings = { 
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll at a time
    draggable: true, // Enables dragging by mouse
    swipe: true, // Ensures touch/mouse swipe works
    swipeToSlide: true, // Enables seamless swiping between slides
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{ marginTop: '20px' }}>
        <ul style={{   }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#888',
          border: 'none',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands = [
    'https://ucarecdn.com/29351ff0-e90b-45f8-a996-db695bfd4584/ISO209001_UKAS_URSlogo.png',
    'https://ucarecdn.com/c59e2d29-4bd9-4507-be37-cff47e635c44/Himoinsalogo.jpg',
    'https://ucarecdn.com/9e65f063-5016-491e-b51c-42914070dbeb/AlcumusSafeContractorLogo.jpg',
    'https://ucarecdn.com/a68b8df9-5650-4c96-8807-b09d9685fc45/chaslogo.png',
    'https://ucarecdn.com/05f737fb-2fc7-4f8f-ae38-3493aa471309/Stephillgeneratorslogo.png',
    'https://ucarecdn.com/b1533324-4806-42fe-ae26-8bb038b30d3d/Inmesollogo.jpg',
  ];

  return (
    <div className="brand-carousel container" style={{ marginTop: "5em", marginBottom: "5em" }}>
      <h3 className="section--title" style={{ marginTop: "3em", marginBottom: "3em" }}>Our Brands</h3>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className=" " 
            style={{ display: 'flex',  height: '200px' }} // Added height
          >
            <Image
              src={brand}
              alt={`Brand ${index + 1}`}
              width={150}
              height={100} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
