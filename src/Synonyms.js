import React from "react";

export default function Synonyms(properties) {
  if (properties.synonyms) {
    return (
      <div>
        {properties.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
