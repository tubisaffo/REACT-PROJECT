// NavBar component
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from "prop-types";
import MovieCard from './MovieCard';

function NavBar({ search }) {
    const base_url = "https://api.themoviedb.org/3";
    const API_key = "&api_key=bead54d2565b9e69388ab12b09cb4d40";
    let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];
    const [movieData, setData] = useState([]);
    const [url, setUrl] = useState('');

    const fetchData = useCallback(() => {
        if (search) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=bead54d2565b9e69388ab12b09cb4d40&query=${search}`
            )
                .then((res) => res.json())
                .then((json) => setData(json.results));
        } else {
            fetch(url)
                .then((res) => res.json())
                .then((json) => setData(json.results));
        }
    }, [search]);

    useEffect(() => {
        if(url){
            fetchData();
        }  
    }, [url, search]);

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
                {movieData.length > 0 && movieData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
NavBar.propTypes = {
    search: PropTypes.string,
};

export default NavBar;
