import React from "react";
import style from "./movie.module.css";

const Movie = ({ Title, Type, Year, imdbID, Poster }) => {
  return (
    <div className={style.Movie}>
      <h2>{Title}</h2>
      <img className={style.image} src={Poster} alt="" />
      <h3>{Year}</h3>
      <h3>{Type}</h3>
      <h3>{imdbID}</h3>
    </div>
  );
};

export default Movie;
