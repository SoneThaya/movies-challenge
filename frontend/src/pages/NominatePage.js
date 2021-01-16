import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Button } from "react-bootstrap";
// import Movie from "../components/Movie";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { listUserNominations } from "../state/actions/userActions.js";
// import { removeFromNominations } from "../state/actions/movieActions.js";

const NominatePage = () => {
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    const storageNominations = JSON.parse(localStorage.getItem("nomis"));
    setChosen(storageNominations);
  }, [chosen]);

  const removeNominateHandler = (imdbID) => {
    let items = JSON.parse(localStorage.getItem("nomis"));

    items = items.filter((item) => item.imdbID !== imdbID);

    localStorage.setItem("nomis", JSON.stringify(items));
  };

  return (
    <>
      <h1>My Nominated Movies</h1>

      <Row>
        {chosen &&
          chosen.map((movie) => (
            <Card className="my-3 p-3 rounded" key={movie.imdbID}>
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
                onClick={() => removeNominateHandler(movie.imdbID)}
              >
                Remove Nomination
              </Button>
            </Card>
          ))}
      </Row>
    </>
  );
};

export default NominatePage;
