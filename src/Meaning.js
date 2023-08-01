import React from "react";
import Synonyms from "./Synonyms";
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
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}