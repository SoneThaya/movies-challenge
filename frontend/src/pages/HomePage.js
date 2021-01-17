import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const movieSearch = useSelector((state) => state.movieSearch);
  const { loading, movies, error } = movieSearch;

  return (
    <>
      <h1>Search for Movies to Nominate</h1>
      <SearchBox />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            {movies.map((movie) => (
              <Col sm={12} md={6} lg={4} xl={3} key={movie.imdbID}>
                <Movie movie={movie} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
