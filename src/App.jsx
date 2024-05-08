import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?s=avengers&apikey=9a9cb4d4";

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className="App">
      <div className="row">
        <Header />
        <SearchBox />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
