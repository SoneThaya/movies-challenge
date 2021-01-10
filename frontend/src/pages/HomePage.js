import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import { listSearchedMovies } from "../state/actions/movieActions";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);

  const dispatch = useDispatch();

  const movieSearch = useSelector((state) => state.movieSearch);
  const { loading, movies, success, error } = movieSearch;

  console.log(movies.Search);
  setMoviesList(movies.Search);

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <h1>Movies</h1>
      <SearchBox />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            {moviesList.map((movie) => (
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
