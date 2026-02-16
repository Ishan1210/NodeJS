import React from "react";
import ProductCard from "./ProductCard";
import "./Suggested.css";

const data = [
  {
    image: "/images/1.jpg",
    title: "Altek Men Flip Flops Navy",
    price: 231,
    oldPrice: 499,
  },
  {
    image: "/images/2.jpg",
    title: "Hambler EXTRA SOFT",
    price: 96,
    oldPrice: 999,
  },
  {
    image: "/images/3.jpg",
    title: "Maan Men Slippers Green",
    price: 186,
    oldPrice: 999,
  },
  {
    image: "/images/4.jpg",
    title: "Squash Men Flip Flops Grey",
    price: 205,
    oldPrice: 699,
    tag: "Hot Deal",
  },
  {
    image: "/images/5.jpg",
    title: "Altek Men Flip Flops Brown",
    price: 210,
    oldPrice: 499,
    tag: "Hot Deal",
  },
];

const Suggested = () => {
  return (
    <div className="suggested-container">
      <h2>Suggested For You</h2>

      <div className="scroll-row">
        {data.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Suggested;
