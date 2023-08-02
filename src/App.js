import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        Dictionary <i class="fa-solid fa-circle icon"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
      </h1>

      <SearchEngine />
      <footer className="text-center">
        Coded and designed by Eloiza Barbosa.
      </footer>
    </div>
  );
}

export default App;
