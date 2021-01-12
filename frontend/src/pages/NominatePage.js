import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUserNominations } from "../state/actions/userActions.js";

const NominatePage = () => {

  const dispatch = useDispatch();

  const userNominations = useSelector((state) => state.userNominations);
    const { loading, nominations, error } = userNominations;
    
    console.log(nominations);

  useEffect(() => {
    dispatch(listUserNominations());
  }, [dispatch]);

  return (
    <>
      <h1>My Nominated Movies</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            {nominations.map((movie) => (
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

export default NominatePage;
