import React from "react";
import "./photos.css";
export default function Photos(properties) {
  console.log(properties.photos);
  if (properties.photos) {
    return (
      <div>
        {properties.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.landscape}
              key={index}
              className="photos"
              alt="word"
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
