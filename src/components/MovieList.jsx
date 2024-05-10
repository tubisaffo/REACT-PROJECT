import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: "200px" }} />
          <p style={{ marginTop: "5px", textAlign: "center" }}>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired
    })
  ).isRequired
};
