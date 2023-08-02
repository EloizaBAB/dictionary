import React from "react";
import "./photos.css";
export default function Photos(properties) {
  /** if we receive the photos then we display them in a grid (bootstrap) else we return nothing */
  /** when we have the photos we use a map method to go through and display each one of them, put each img inside a link and linked it to its original link */
  if (properties.photos) {
    let displayedphotos = properties.photos.slice(0, 4);
    return (
      <div className="row">
        {displayedphotos.map(function (photo, index) {
          return (
            <div key={index} className="col-md-3">
              {" "}
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="photos img-fluid"
                  alt="word"
                />
              </a>{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
