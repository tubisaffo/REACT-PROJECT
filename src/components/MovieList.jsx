import React from "react";
import ProtoTypes from "prop-types";

const MovieList = (props) => {
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
  movies: ProtoTypes.array,
};
