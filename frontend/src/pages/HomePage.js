import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import moviesData from "../MoviesData";
import MovieDetails from '../components/MovieDetails'

const HomePage = () => {
  return (
    <>
      <h1>Movies</h1>
      <Row>
        {moviesData.map((movie) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <MovieDetails movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
