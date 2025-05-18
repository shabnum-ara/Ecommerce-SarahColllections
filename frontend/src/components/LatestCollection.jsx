import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import Title from "./Title";
import ProducItem from "./ProductItem";
import { useEffect } from "react";
import { useState } from "react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const latest = products.slice(0, 5);
      setLatestProducts(latest);
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Fresh arrivals handpicked to keep your style on point
        </p>
      </div>

      {/* rendering latest products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProducItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
