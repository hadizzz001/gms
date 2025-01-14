import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from 'next/link'

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="brand-carousel container" style={{ marginTop: "5em", marginBottom: "5em" }}>
      <h3 className="section--title" style={{ marginTop: "3em", marginBottom: "3em" }}>Products</h3>
      <Slider {...settings}> 
        {products.map((product) => (
          <Link href={`/product?id=${product.id}`} key={product.id}  >
          <div key={product.id} className="">
            <div className="text-center">
              <img
                src={product.img[0]}
                alt={product.title}
                className="w-full h-80 object-contain mb-2"
                style={{ background: "none" }}
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.category}</p> 
              <p className="text-gray-500">${product.price}</p> 
            </div>
          </div>
          </Link>
        ))} 
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
