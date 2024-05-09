import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import AddFavourite from './components/AddFavourites';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=9a9cb4d4`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
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
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div className="row">
        <Header />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList 
          movies={movies} 
          favouriteComponent={AddFavourite} 
          handleFavouritesClick={addFavouriteMovie}
          handleRemoveFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
