import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <span>
          <img src={logo} alt="logo" width="200px" className="img-fluid" />
        </span>
        <span>
          <h1>Dictionary</h1>
        </span>
      </header>
    </div>
  );
}

export default App;
