import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourites";
// import AddFavorite from "./components/AddFavourites";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovieRequest = async (searchValue) => {
    setIsLoading(true);
    setError(null);

    try {
      `https://www.omdbapi.com/?s=${searchValue}&apikey=9a9cb4d4
      const url = `;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setError("No movies found");
      }
    } catch (error) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favMovie) => favMovie !== movie
    );
    setFavourites(newFavouriteList);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={addFavouriteMovie}
          handleRemoveFavouritesClick={removeFavouriteMovie}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
