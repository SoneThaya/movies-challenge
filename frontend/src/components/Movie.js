import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const LOCAL_STORAGE_KEY = "nominations-list";

const Movie = ({ movie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [poster, setPoster] = useState("");
  const [imdbID, setImdbID] = useState("");

  const [temp, setTemp] = useState([]);

  const [noms, setNoms] = useState({
    title: "",
    year: "",
    poster: "",
    imdbID: ""
  })

  console.log(movie);

  useEffect(() => {
    setTitle(movie.Title);
    setYear(movie.Year);
    setPoster(movie.Poster);
    setImdbID(movie.imdbID);
    setNoms({...temp, title, year, poster, imdbID})
  }, [movie.Poster, movie.Title, movie.Year, movie.imdbID]);

  console.log("title", title);
  console.log("year", year);
  console.log("poster", poster);
  console.log("imdbID", imdbID);

  useEffect(() => {
    const storageNominations = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageNominations) {
      setTemp(storageNominations);
    }
  }, []);

  useEffect(() => {
    //setChosen(storage);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
  }, [temp]);

  const nominateHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ poster, title, year, imdbID })
    );
    setTemp([...temp, movie]);
  };

  return (
    <Card className="my-3 p-3 rounded">
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
      <Button className="btn-block" type="button" onClick={nominateHandler}>
        Nominate
      </Button>
    </Card>
  );
};

export default Movie;
