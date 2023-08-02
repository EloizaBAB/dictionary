import { useState } from "react";
import "./searchstyle.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function SearchEngine() {
  let [userinput, setuserinput] = useState("");
  let [results, setresults] = useState(null);
  let [wordexists, setwordexists] = useState(true);
  let [photos, setphotos] = useState(null);
  function handleshecodesResponse(response) {
    setphotos(response.data.photos);
  }
  function handleResponse(response) {
    setresults(response.data[0]);
    setwordexists(true);
  }
  function handlechange(event) {
    setuserinput(event.target.value);
  }
  /** api documentation : https://dictionaryapi.dev/ */
  /** Used the shecodes image api to get the photos,stored the photos in a state and displayed them inside a Photos component, we sent the images through properties */
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userinput}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setresults(null);
        setwordexists(false);
      });
    const shecodesapiKey = "a1c796b14cf2te15c7f3o0401b05114d";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${userinput}&key=${shecodesapiKey}`;

    axios.get(shecodesApiUrl).then(handleshecodesResponse);
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
  /**Created the wordExists state to track whether the word exists in the API or not.
Modified the handleResponse function to set wordExists to true after successfully fetching data from the API.
Updated the handleSearch function to handle errors in the API call using the .catch() method of the Axios promise. If an error occurs, we set wordExists to false and results to null.
// <Results result={results} />: This is the expression that will be evaluated if wordExists is true. It renders the Results component and passes the results state as a prop called result.
// <p>Invalid word. Please try again.</p>: This is the expression that will be evaluated if wordExists is false. It renders a paragraph (<p>) */
  if (results) {
    return (
      <div className="search-engine">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={handlechange}
          ></input>
        </form>
        {wordexists ? (
          <Results result={results} />
        ) : (
          <p>Invalid word. Please try again.</p>
        )}
        <Photos photos={photos} />
      </div>
    );
  }
  return (
    <div className="search-engine">
      <form onSubmit={search}>
        <input
          className="type"
          type="search"
          placeholder="Enter Word"
          onChange={handlechange}
        ></input>
      </form>
      {wordexists ? (
        <Results result={results} />
      ) : (
        <p>Invalid word. Please try again.</p>
      )}
      <Photos photos={photos} />
    </div>
  );
}
