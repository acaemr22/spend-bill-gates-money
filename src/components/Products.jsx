import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useSelector } from "react-redux";

const Products = () => {
  const productItems = useSelector((state) => state.products.productItems);

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 my-3">
      {productItems.map((productItem, index) => (
        <Product
          key={index}
          url={productItem.url}
          name={productItem.name}
          price={productItem.price}
          number={productItem.number}
        />
      ))}
    </section>
  );
};

export default Products;
