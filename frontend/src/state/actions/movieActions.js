import axios from "axios";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
  MOVIE_ADD_NOMINATION,
  MOVIE_REMOVE_NOMINATION,
} from "../constants/movieConstants";

const omdbBaseUrl = "http://www.omdbapi.com/?apikey=";

export const listSearchedMovies = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_SEARCH_REQUEST });

    const { data } = await axios.get(
      `${omdbBaseUrl}${process.env.REACT_APP_OMDB_KEY}&s=${searchTerm}`
    );

    dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: data.Search });
  } catch (error) {
    dispatch({
      type: MOVIE_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToNominations = (id) => async (dispatch, getState) => {
  //const { data } = await axios.get(`/api/products/${id}`)

  const { data } = await axios.get(
    `${omdbBaseUrl}${process.env.REACT_APP_OMDB_KEY}&i=${id}`
  );

  dispatch({
    type: MOVIE_ADD_NOMINATION,
    payload: {
      Title: data.Title,
      Year: data.Year,
      imdbID: data.imdbID,
      Poster: data.Poster,
    },
  });

  localStorage.setItem(
    "movieNominations",
    JSON.stringify(getState().movie.movieNominations)
  );
};

export const removeFromNominations = (id) => (dispatch, getState) => {
  dispatch({
    type: MOVIE_REMOVE_NOMINATION,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
