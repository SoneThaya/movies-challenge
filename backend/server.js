import express from "express";
import dotenv from "dotenv";
import movies from "./data/MoviesData.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:imdbID", (req, res) => {
  const movie = movies.find((p) => p.imdbID === req.params.id);

  res.json(movie);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
