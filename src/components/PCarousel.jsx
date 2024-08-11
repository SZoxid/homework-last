import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

export default function PCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const chunkSize = 4;
  const productChunks = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-gray-700 mt-[15px]">
      <Carousel>
        {productChunks.map((chunk, index) => (
          <div
            key={index}
            className="h-full flex justify-center items-center gap-[50px]"
          >
            {chunk.map((product) => (
              <div
                key={product.id}
                className="w-[300px] h-[350px] flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[250px] h-[200px] object-contain mt-[30px]"
                />
                <h3 className="text-sm text-white font-semibold text-center mt-[15px]">
                  {product.title}
                </h3>
                <p className="text-lg text-white font-bold mt-[15px]">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
