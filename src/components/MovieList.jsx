import React from "react";
import ProtoTypes from "prop-types";
import "../App.css";


const MovieList = ({ movies }) => {
  return (
    <div>
      {props.movies.map((movie) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <img src={movie.Poster} alt="title" />
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
