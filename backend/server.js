const express = require("express");
const movies = require("./data/MoviesData");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:imdbID", (req, res) => {
    const movie = movies.find(p => p.imdbID === req.params.id);

    res.json(movie);
  });

app.listen(5000, console.log("server running on port 5000"));
