import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
} from "../constants/movieConstants";

export const movieSearchReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_REQUEST:
      return { loading: true, movies: [] };
    case MOVIE_SEARCH_SUCCESS:
      return { loading: false, movies: action.payload };
    case MOVIE_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
