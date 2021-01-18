import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Message from "../components/Message";

const LOCAL_STORAGE_KEY = "nomis";

const HomePage = () => {
  const [temp, setTemp] = useState([]);

  const movieSearch = useSelector((state) => state.movieSearch);
  const { loading, movies, error } = movieSearch;

  useEffect(() => {
    const storageNominations = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageNominations) {
      setTemp(storageNominations);
    }
  }, [temp]);

  return (
    <>
      <h1>Search for Movies to Nominate</h1>
      <SearchBox />
      {temp.length > 4 && <Message>You have nominated 5 movies!</Message>}
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
