import React from "react";

/* Some movies retrieved from the API do not have images, so the placeholder image will be rendered instead of a broken link */
const DEFAULT_PLACEHOLDER_IMAGE = "";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
    </div>
  );
};

export default Movie;
