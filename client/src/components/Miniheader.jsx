import React from "react";
import styles from "../css/Miniheader.css";

export default function Miniheader() {
  return (
    <div>
      <div className={styles.leftColumn}>
        <div className={styles.title}>Accuracy</div>
        <div className={styles.ACsmallStars}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>

        <div>
          <div className={styles.title}>Communication</div>
          <div className={styles.COMsmallStars}>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className={styles.title}>Cleanliness</div>
          <div className={styles.CLsmallStars}>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div>
          <div className={styles.title}>Location</div>
          <div className={styles.smallStars}>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className={styles.title}>Check-in</div>
          <div className={styles.smallStars}>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className={styles.title}>Value</div>
          <div className={styles.VsmallStars}>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
      </div>
    </div>
  );
}
