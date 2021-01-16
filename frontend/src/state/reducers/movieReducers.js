import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
  MOVIE_ADD_NOMINATION_REQUEST,
  MOVIE_ADD_NOMINATION_SUCCESS,
  MOVIE_ADD_NOMINATION_FAIL,
  MOVIE_DELETE_NOMINATION_REQUEST,
  MOVIE_DELETE_NOMINATION_SUCCESS,
  MOVIE_DELETE_NOMINATION_FAIL,
  USER_NOMINATIONS_REQUEST,
  USER_NOMINATIONS_SUCCESS,
  USER_NOMINATIONS_FAIL,
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

export const movieAddNominationReducer = (state = { noms: [] }, action) => {
  switch (action.type) {
    case MOVIE_ADD_NOMINATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_ADD_NOMINATION_SUCCESS:
      return {
        loading: false,
        success: true,
        noms: [...state.noms, action.payload],
      };
    case MOVIE_ADD_NOMINATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const movieDeleteNominationReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DELETE_NOMINATION_REQUEST:
      return {
        loading: true,
      };
    case MOVIE_DELETE_NOMINATION_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case MOVIE_DELETE_NOMINATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userNominationReducer = (state = { nominations: [] }, action) => {
  switch (action.type) {
    case USER_NOMINATIONS_REQUEST:
      return {
        loading: true,
      };
    case USER_NOMINATIONS_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_NOMINATIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
