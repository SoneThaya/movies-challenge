import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Movie = ({ movie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [poster, setPoster] = useState("");
  const [imdbID, setImdbID] = useState("");

  useEffect(() => {
    setTitle(movie.Title);
    setYear(movie.Year);
    setPoster(movie.Poser);
    setImdbID(movie.imdbID);
  }, []);

  // console.log("title", title);
  // console.log("year", year);
  // console.log("poster", poster);
  //console.log("imdbID", imdbID);

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
      </Card.Body>
      <Button>Nominate</Button>
    </Card>
  );
};

export default Movie;
