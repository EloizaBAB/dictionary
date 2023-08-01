import React from "react";
import Meaning from "./Meaning";
export default function Results(properties) {
  if (properties.result) {
    return (
      <div>
        <h1>{properties.result.word}</h1>
        {properties.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
//to display each meaning wwe have go create a map and go through each one of them(theres an array of meanings and each of them has multiple definitions, and each definition has an axample and multiple synonims)
//gonna create a component to loop through all the definitions of a meaning
//create a div that has the index and pput the component inside it and send the variable meaning that we got from the map function as propertie to the Meaning component