import axios from "axios";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
  MOVIE_ADD_NOMINATION_REQUEST,
  MOVIE_ADD_NOMINATION_SUCCESS,
  MOVIE_ADD_NOMINATION_FAIL,
} from "../constants/movieConstants";

const omdbBaseUrl = "https://www.omdbapi.com/?apikey=";

export const listSearchedMovies = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_SEARCH_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${omdbBaseUrl}${process.env.REACT_APP_OMDB_KEY}&s=${searchTerm}`,
      config
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

export const movieAddNomination = (movie) => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVIE_ADD_NOMINATION_REQUEST });

    const { data } = await axios.get(
      `${omdbBaseUrl}${process.env.REACT_APP_OMDB_KEY}&i=${movie.imdbID}`
    );

    dispatch({ type: MOVIE_ADD_NOMINATION_SUCCESS, payload: data });

    localStorage.setItem("nomis", JSON.stringify(getState().movieNoms.noms));
  } catch (error) {
    dispatch({
      type: MOVIE_ADD_NOMINATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
