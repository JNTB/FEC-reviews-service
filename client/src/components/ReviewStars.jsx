import React from "react";
import styles from "../css/reviewStars.css";

export default function ReviewStars() {
  return (
    <div className={styles.reviewHead}>
      <h1 className={styles.reviewHeader}>420 Reviews </h1>
      <div className={styles.stars}>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </div>
      <span>
        <div className={styles.search}>
          <i className="fa fa-search" />
          <input
            className={styles.searchQuery}
            type="search"
            placeholder="Search Reviews"
            results="0"
          />
        </div>
      </span>
    </div>
  );
}
