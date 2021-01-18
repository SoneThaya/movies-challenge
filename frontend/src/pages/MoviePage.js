import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
import { movieAddNomination } from "../state/actions/movieActions";
import Message from "../components/Message";

const LOCAL_STORAGE_KEY = "nomis";

const MoviePage = ({ match }) => {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({});

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${match.params.imdbID}`
      );

      setMovie(data);
    };

    fetchMovie();
  }, [match, movie]);

  useEffect(() => {
    const storageNominations = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageNominations) {
      setTemp(storageNominations);
    }
  }, [temp]);

  const nominateHandler = () => {
    dispatch(movieAddNomination(movie));
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {temp.length > 4 && <Message>You have nominated 5 movies!</Message>}
      <Row>
        <Col md={6}>
          <Image src={movie.Poster} alt={movie.Title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{movie.Title}</h2>
            </ListGroup.Item>
            <ListGroup.Item>{movie.Year}</ListGroup.Item>
            <ListGroup.Item>
              <strong>{movie.Plot}</strong>
            </ListGroup.Item>
            <ListGroup.Item>Director: {movie.Director}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Cast: {movie.Actors}</strong>
            </ListGroup.Item>
            <ListGroup.Item>Metascore: {movie.Metascore}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={nominateHandler}
                  disabled={
                    temp.length > 4 ||
                    temp.some((nom) => nom.imdbID === movie.imdbID)
                  }
                >
                  Nominate
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MoviePage;
