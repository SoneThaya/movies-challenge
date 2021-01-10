import React from "react";
import { Card } from "react-bootstrap";

const MovieDetails = ({ movie }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/movie/${movie._id}`}>
        <Card.Img src={movie.Poster} variant="top" />
      </a>
      <Card.Body>
        <a href={`/movie/${movie._id}`}>
          <Card.Title as="div">
            <strong>{movie.Title}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">Released: {movie.Year}</Card.Text>
        <Card.Text as="div">Metascore: {movie.Metascore}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
