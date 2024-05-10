import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { Movie } from "./components/Movie";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header />

      <SearchBox value={search} setSearchValue={(text) => setSearch(text)} />
      <Movie search={search} />
    </div>
  );
}

export default App;
