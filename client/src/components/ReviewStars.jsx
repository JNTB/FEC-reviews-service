import React from "react";

export default function ReviewStars() {
  return (
    <div className="reviewHead">
      <h1 className="reviewHeader">420 Reviews </h1>
      <div className="stars">
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </div>
      <div className="search">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search Results" results="0" />
      </div>
    </div>
  );
}
