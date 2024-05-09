import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import AddFavourite from './components/AddFavourites'; // corrected import name

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?s=avengers&apikey=9a9cb4d4";

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favMovie) => favMovie !== movie);
    setFavourites(newFavouriteList);
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
        <MovieList 
          movies={movies} 
          favouriteComponent={AddFavourite} // corrected component name
          handleFavouritesClick={addFavouriteMovie}
          handleRemoveFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
