import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url =
      "https://www.omdbapi.com/?i=guardian of the galaxy&apikey=9a9cb4d4";

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
