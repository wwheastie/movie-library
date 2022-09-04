import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./SearchComponent";
import Movies from "./MoviesComponent";
import { flushSync } from "react-dom";

const API_URL = "https://www.omdbapi.com/?apikey=4190beb3";

const App = () => {
    const INITAL_MESSAGE = "Begin by searching a movie title";
    const NOT_FOUND_MESSAGE = "No movies found";

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        const search = data.Search;
        setMovies(search);

        const message = search?.length > 0 ? '' : NOT_FOUND_MESSAGE;
        setDisplayMessage(message);
    }

    const [movies, setMovies] = useState();
    const [displayMessage, setDisplayMessage] = useState(INITAL_MESSAGE);

    return (
        <div className="app">
            <h1> Blockbuster </h1>

            <SearchBar placeholder='Search for movie' searchFunction={searchMovies} />
            <Movies movies={movies} displayMessage={displayMessage} />

        </div>
    );
}

export default App;
