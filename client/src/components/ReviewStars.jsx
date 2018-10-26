import React from "react";

export default function ReviewStars() {
  return (
    <div className="reviewHead">
      <h1 className="reviewHeader">420 Reviews </h1>
      <div className="stars">
        <span class="fa fa-star checked" />
        <span class="fa fa-star checked" />
        <span class="fa fa-star checked" />
        <span class="fa fa-star" />
        <span class="fa fa-star" />
      </div>

      <div className="search">
        <i class="fa fa-search" />
        <input type="text" placeholder="Search Results" results="0" />
      </div>
    </div>
  );
}
