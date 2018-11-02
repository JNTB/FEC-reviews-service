import React from "react";

export default function Miniheader() {
  return (
    <div>
      <div className="left-Column">
        <div className="title">Accuracy</div>
        <div className="ACsmall-stars">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>

        <div>
          <div className="title">Communication</div>
          <div className="COMsmall-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className="title">Cleanliness</div>
          <div className="CLsmall-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
      </div>

      <div className="right-Column">
        <div>
          <div className="title">Location</div>
          <div className="small-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className="title">Check-in</div>
          <div className="small-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>

        <div>
          <div className="title">Value</div>
          <div className="Vsmall-stars">
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
