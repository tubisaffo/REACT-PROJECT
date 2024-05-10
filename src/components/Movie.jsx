import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

export function Movie({ search }) {
  const [movieList, setMovieList] = useState([]);

  const getMovie = useCallback(() => {
    if (search) {
      console.log(search);
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
  return (
    <div>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

Movie.propTypes = {
  search: PropTypes.string,
};
 
export default Movie