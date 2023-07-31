import React from "react";
export default function Meaning(properties) {
  return (
    <div>
      <h3>{properties.meaning.partOfSpeech}</h3>
      {properties.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition} <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
