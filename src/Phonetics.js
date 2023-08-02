import React from "react";
import "./searchstyle.css";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetics(properties) {
  if (properties.phonetic.audio) {
    return (
      <div className="audio">
        <ReactAudioPlayer src={properties.phonetic.audio} controls />

        {properties.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
//got the audio as properties from the <Results/> and put it inside a link and the text from the phonetics data
// to display the audio and have it playing without changing the webpage I used a component from https://www.npmjs.com/package/react-audio-player
