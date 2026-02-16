import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price, oldPrice, tag, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-img" />

      <p className="card-title">{title}</p>

      <div className="price-section">
        <span className="price">₹{price}</span>
        <span className="old-price">₹{oldPrice}</span>
      </div>

      {tag && <p className="tag">{tag}</p>}
    </div>
  );
};

export default ProductCard;
