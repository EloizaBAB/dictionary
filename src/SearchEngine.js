import { useState } from "react";
import "./searchstyle.css";
export default function SearchEngine() {
  let [userinput, setuserinput] = useState("");

  function handlechange(event) {
    console.log(event.target.value);
    setuserinput(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${userinput}`);
  }
  /* add an eventlistenner Onsubmit to form to trigger the function search
      when the user submits a word*/
  /** to keep track of the word the user
      inputs we need to store it inside a state, we need a useState because the
      input is going to change during the lifecycle of this component*/
  /** Everytime the user types a different word the component changes state,so we need to add an event Onchange to the input that triggers the function to handle the change and store the new value inside the state */

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
    </div>
  );
}
