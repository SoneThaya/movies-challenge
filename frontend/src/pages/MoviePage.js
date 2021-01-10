import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import moviesData from "../MoviesData";

const MoviePage = ({ match }) => {
  const movie = moviesData.find((m) => m._id === match.params.id);

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
                <Button className="btn-block" type="button">
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
