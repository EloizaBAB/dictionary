import { useState } from "react";
import "./searchstyle.css";
import axios from "axios";
import Results from "./Results";
export default function SearchEngine() {
  let [userinput, setuserinput] = useState("");
  let [results, setresults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setresults(response.data[0]);
  }
  function handlechange(event) {
    setuserinput(event.target.value);
  }
  /** api documentation : https://dictionaryapi.dev/ */
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userinput}`;
    axios.get(apiUrl).then(handleResponse);
  }
  /* add an eventlistenner Onsubmit to form to trigger the function search
      when the user submits a word*/
  /** to keep track of the word the user
      inputs we need to store it inside a state, we need a useState because the
      input is going to change during the lifecycle of this component*/
  /** Everytime the user types a different word the component changes state,so we need to add an event Onchange to the input that triggers the function to handle the change and store the new value inside the state */
  /**add and import axios and get the api url inside the function that searches to make the http request using axios */
  /** Build a new component do show the results we got from the api call */
  /**to send the info/results from the api to the component Results we need to use a state,and the state is going to track and store the content of the current word and send it as a propertie to the new component Results */
  return (
    <div className="search-engine">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Write here"
          autoFocus={true}
          onChange={handlechange}
        ></input>
        <input type="submit"></input>
      </form>
      <Results result={results} />
    </div>
  );
}
