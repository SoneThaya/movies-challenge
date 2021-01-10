import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:imdbID", (req, res) => {
  const movie = movies.find((p) => p.imdbID === req.params.id);

  res.json(movie);
});

export default router;
