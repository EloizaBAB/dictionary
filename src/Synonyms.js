import React from "react";
//created the component to display the synonyms by sending the data from the <Meaning/>  through properties to <Synonyms/>
//sent the definition value,which is an array of strings as properties and render one synonym at a time
export default function Synonyms(properties) {
  if (properties.synonyms) {
    return (
      <ul>
        {properties.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
