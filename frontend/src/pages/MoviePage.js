import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState({});

  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [poster, setPoster] = useState("");
  const [imdbID, setImdbID] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${match.params.imdbID}`
      );

      setMovie(data);
      setTitle(movie.Title);
      setYear(movie.Year);
      setPoster(movie.Poster);
      setImdbID(movie.imdbID);
      //console.log("data", movie);
    };

    fetchMovie();
  }, [match, movie.Poster, movie.Title, movie.Year, movie.imdbID]);

  console.log("title", title);
  console.log("year", year);
  console.log("poster", poster);
  console.log("imdbID", imdbID);

  const nominateHandler = () => {
    localStorage.setItem(
      "nominations",
      JSON.stringify({ poster, title, year, imdbID })
    );
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
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
