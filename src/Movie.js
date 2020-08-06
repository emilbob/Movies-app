import React from "react";
import style from "./movie.module.css";

const Movie = ({ Title, Type, Year, imdbID, Poster }) => {
  return (
    <div className={style.movie}>
      <h2>{Title}</h2>
      <img className={style.image} src={Poster} alt="" />
      <h3>year: {Year}</h3>
      <h3>type: {Type}</h3>
      <h3>imdb id: {imdbID}</h3>
    </div>
  );
};

export default Movie;
