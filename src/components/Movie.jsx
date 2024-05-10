import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "../App.css";

export function Movie({ search }) {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie

  const getMovie = useCallback(() => {
    if (search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bead54d2565b9e69388ab12b09cb4d40&query=${search}`
      )
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    } else {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=bead54d2565b9e69388ab12b09cb4d40"
      )
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    }
  }, [search]);

  useEffect(() => {
    getMovie();
  }, [getMovie, search]);

  // Function to handle click on a movie item
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="MovieWrapper">
      {movieList.map((movie) => (
        <div key={movie.id} className="MovieItem" onClick={() => handleMovieClick(movie)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="MoviePoster"
            alt={movie.title}
          />
          <p className="MovieTitle" style={{ textAlign: "center", fontSize: "17px", marginTop: "10px", color: "#fff", backgroundColor: "#333" }}>
            {movie.title}
          </p>
        </div>
      ))}

      {/* Modal or overview component to display the selected movie */}
      {selectedMovie && (
        <div className="MovieOverview">
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          {/* Add additional details here */}
          <button onClick={() => setSelectedMovie(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

Movie.propTypes = {
  search: PropTypes.string,
};

export default Movie;
