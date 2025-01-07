// components/ProductsCarousel.js
import React from "react";
import Slider from "react-slick";

const ProductsCarousel = () => {
  // Static products data
  const products = [
    {
      id: 1,
      title: "Diesel Generator A",
      category: "Generators",
      price: 1200,
      image: "https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg",
    },
    {
      id: 2,
      title: "Diesel Generator B",
      category: "Generators",
      price: 1300,
      image: "https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg",
    },
    {
      id: 3,
      title: "Diesel Generator C",
      category: "Generators",
      price: 1250,
      image: "https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg",
    },
    {
      id: 4,
      title: "Diesel Generator D",
      category: "Generators",
      price: 1400,
      image: "https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg",
    },
    {
      id: 5,
      title: "Diesel Generator E",
      category: "Generators",
      price: 1500,
      image: "https://ucarecdn.com/04aa3576-95de-466a-a1c4-8b6250af70b1/dieselgenerator.jpg",
    },
  ];

  // React Slick settings
  const settings = { 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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

  return (
    <div className="brand-carousel container" style={{marginTop: "5em",marginBottom: "5em"}}>
      <h3 className="section--title" style={{marginTop: "3em",marginBottom: "3em"}}>Products</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className=" ">
            <div className=" text-center ">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
                style={{ background: "none" }} // Removes background from image container
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
