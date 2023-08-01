import React from "react";
import "./photos.css";
export default function Photos(properties) {
  console.log(properties.photos);
  if (properties.photos) {
    return (
      <div className="row">
        {properties.photos.map(function (photo, index) {
          return (
            <div key={index} className="col-3">
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
