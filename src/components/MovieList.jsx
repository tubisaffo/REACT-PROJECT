import React from 'react';
import PropTypes from 'prop-types';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index}>
                    <img src={movie.Poster} alt='movie' />
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    favouriteComponent: PropTypes.elementType.isRequired,
    handleFavouritesClick: PropTypes.func.isRequired
};

export default MovieList;
