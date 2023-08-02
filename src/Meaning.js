import React from "react";
import "./searchstyle.css";
import Synonyms from "./Synonyms";
export default function Meaning(properties) {
  return (
    <div className="meaning">
      <h3>{properties.meaning.partOfSpeech}</h3>
      {properties.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="row">
            <div>
              {" "}
              <p className="definitions">
                {definition.definition} <br />
                <em className="example">{definition.example}</em>
              </p>
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
