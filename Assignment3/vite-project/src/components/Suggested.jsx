import React, { useState } from "react";
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
  }
];

const Suggested = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="suggested-container">
      <h2>Suggested For You</h2>

      <div className="scroll-row">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {/* Popup */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <img src={selected.image} alt="" />
            <p className="modal-price">Price: ₹{selected.price}</p>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggested;
