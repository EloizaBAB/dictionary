import React from "react";
import "./searchstyle.css";
//created the component to display the synonyms by sending the data from the <Meaning/>  through properties to <Synonyms/>
//sent the definition value,which is an array of strings as properties and render one synonym at a time
export default function Synonyms(properties) {
  if (properties.synonyms) {
    return (
      <ul>
        {properties.synonyms.map(function (synonym, index) {
          return (
            <div className="synonyms">
              {" "}
              <span className="synonym-title">
                Synonyms <i class="fa-solid fa-arrow-right"></i>{" "}
              </span>
              <span>
                {" "}
                <li key={index} className="synonym-list">
                  {synonym}
                </li>
              </span>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
