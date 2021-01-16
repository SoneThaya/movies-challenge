import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUserNominations } from "../state/actions/userActions.js";

const LOCAL_STORAGE_KEY = "nominations-list";

const NominatePage = () => {
  const [chosen, setChosen] = useState([]);

  const dispatch = useDispatch();

  // const userNominations = useSelector((state) => state.userNominations);
  // const { loading, nominations, error } = userNominations;

  // let storage = localStorage.getItem("nominations");
  // return storage ? JSON.parse(storage) : []

  useEffect(() => {
    const storageNominations = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageNominations) {
      setChosen(storageNominations);
    }
  }, []);

  useEffect(() => {
    //setChosen(storage);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chosen));
  }, [chosen]);

  console.log("chosen", chosen);

  const removeNominateHandler = (imdbID) => {
    // localStorage.setItem(
    //   "nominations",
    //   JSON.stringify({ poster, title, year, imdbID })
    // );
    // setChosen(chosen.filter((choice) => choice.imdbID !== imdbID));
  };

  return (
    <>
      <h1>My Nominated Movies</h1>

      <Row>
        {chosen.map((movie) => (
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
