import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { movieAddNomination } from "../state/actions/movieActions";

const LOCAL_STORAGE_KEY = "nomis";

const Movie = ({ movie }) => {

  const [temp, setTemp] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const storageNominations = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageNominations) {
      setTemp(storageNominations);
    }
  }, [temp]);

  const nominateHandler = (e) => {
    e.preventDefault();

    dispatch(movieAddNomination(movie));
  };

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
      <Button
        className="btn-block"
        type="button"
        onClick={nominateHandler}
        disabled={temp.length > 4 || temp.some((nom) => nom.imdbID === movie.imdbID)}
      >
        Nominate
      </Button>
    </Card>
  );
};

export default Movie;
