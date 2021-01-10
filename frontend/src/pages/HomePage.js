import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import axios from "axios";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("/api/movies");

      setMovies(data);
    };

    fetchMovies()
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <Row>
        {movies.map((movie) => (
          <Col sm={12} md={6} lg={4} xl={3} key={movie.imdbID}>
            <Movie movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
