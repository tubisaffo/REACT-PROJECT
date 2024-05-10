import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
