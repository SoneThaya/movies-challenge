import axios from "axios";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
} from "../constants/movieConstants";

export const listSearchedMovies = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_SEARCH_REQUEST });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=23ea9c2e&s=${searchTerm}`
    );

    dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: data });
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
