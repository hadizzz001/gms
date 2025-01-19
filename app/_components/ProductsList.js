// components/ProductsList.js
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const ProductsList = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!type) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products2/${type}`);
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
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
  }, [type]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  if (products.length === 0) return <p>No products found for type "{type}".</p>;

  return (
    <div className="relative w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="product-slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/product?id=${product.id}`} passHref>
            <div className="cursor-pointer border p-4 rounded shadow hover:shadow-lg transition relative">
  <img
    src={product.img?.[0] || "/placeholder.jpg"}
    alt={product.title}
    className="w-full h-48 object-cover rounded mb-3"
  />
  <img
    src="https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
    alt="Watermark"
    className="absolute top-0 right-0 p-4 opacity-50" // Adjust opacity, position, and padding as needed
  />
  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
</div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
