// NavBar component
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function NavBar() {
    const base_url = "https://api.themoviedb.org/3";
    const API_key = "&api_key=bead54d2565b9e69388ab12b09cb4d40";
    let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];
    const [movieData, setData] = useState(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.results);
            })
            .catch(error => console.error('Error fetching data: ', error));
    };

    const handleItemClick = (movieType) => {
        let newUrl = '';
        switch (movieType) {
            case "Popular":
                newUrl = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
                break;
            case "Theatre":
                newUrl = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + API_key;
                break;
            case "Kids":
                newUrl = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key;
                break;
            case "Drama":
                newUrl = base_url + "/discover/movie?with_genres=18&primary_release_year=2014" + API_key;
                break;
            case "Comedie":
                newUrl = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_key;
                break;
            default:
                newUrl = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        }
        setUrl(newUrl);
    };

    return (
        <div>
            <nav>
                <ul>
                    {arr.map((value, pos) => (
                        <li key={pos}><a href="#" onClick={() => handleItemClick(value)}>{value}</a></li>
                    ))}
                </ul>
            </nav>
            <div>
                {movieData !== null && movieData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default NavBar;
