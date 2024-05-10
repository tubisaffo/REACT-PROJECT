// MovieCard component
import React from 'react';

function MovieCard({ movie }) {
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className='movie'>
                <img src={img_path + movie.poster_path} className="poster" alt={movie.title} />
                <div className='box'>
                    <h2>{movie.title}</h2>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rated: {movie.vote_average}⭐</p>
                </div>

            </div>

        </>
    );
}

export default MovieCard;
