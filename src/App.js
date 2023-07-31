import "./App.css";
import logo from "./logo.png";
import SearchEngine from "./SearchEngine";

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
      <main>
        <SearchEngine />
      </main>
      <footer className="text-center">
        {" "}
        Coded and designed by Eloiza Barbosa
      </footer>
    </div>
  );
}

export default App;
