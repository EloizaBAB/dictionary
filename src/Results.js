import React from "react";
import "./searchstyle.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Results(properties) {
  if (properties.result) {
    return (
      <div>
        {properties.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}{" "}
        <h1 className="user-input">{properties.result.word}</h1>
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
//used map to loop through the different phonetics available and created a component Phonetics to send the data stored in phonetic variable as properties to the component Phonetics
