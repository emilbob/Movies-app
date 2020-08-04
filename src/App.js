import React, { useEffect, useState } from "react";

import "./App.css";
import Movie from "./Movie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=deece877&s=${query}`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="movies">
        {movies.map((movie) => (
          <Movie
            key={movie.Title}
            Title={movie.Title}
            Type={movie.Type}
            Year={movie.Year}
            imdbID={movie.imdbID}
            Poster={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
