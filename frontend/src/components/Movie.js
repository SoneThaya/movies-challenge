import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/movie/${movie.imdbID}`}>
        <Card.Img src={movie.Poster} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/movie/${movie.imdbID}`}>
          <Card.Title as="div">
            <strong>{movie.Title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">Released: {movie.Year}</Card.Text>
        <Card.Text as="div">Metascore: {movie.Metascore}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
