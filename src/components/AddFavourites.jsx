import React, { useState } from 'react';

const AddFavorite = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="favorite-container">
            <span className="mr-2" onClick={toggleFavorite}>
                {isFavorite ? 'Favorite' : 'Not a Favorite'}
            </span>
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}
                fill={isFavorite ? 'gold' : 'currentColor'}
                xmlns='http://www.w3.org/2000/svg'
                onClick={toggleFavorite}
                style={{ cursor: 'pointer' }}
            >
                <path
                    fillRule='evenodd'
                    d='M8 .753l1.647 3.795 4.325.396a.475.475 0 0 1 .264.816l-3.274 2.735.955 4.655a.475.475 0 0 1-.725.5L8 12.347l-3.954 2.09a.475.475 0 0 1-.725-.5l.955-4.655-3.274-2.735a.475.475 0 0 1 .264-.816l4.325-.396L8 .753z'
                />
            </svg>
        </div>
    );
};

export default AddFavorite;
