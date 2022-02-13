import React from "react";
import "./Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-img"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-category"></div>
      <div className="skeleton-price"></div>
      <div className="skeleton-rating"></div>
    </div>
  );
}

export default Skeleton;
