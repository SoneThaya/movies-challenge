import axios from "axios";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
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
