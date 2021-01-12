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
  MOVIE_ADD_NOMINATION,
  MOVIE_CLEAR_NOMINATION,
  MOVIE_REMOVE_NOMINATION,
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

export const movieAddNominationReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_ADD_NOMINATION_REQUEST:
      return {
        loading: true,
      };
    case MOVIE_ADD_NOMINATION_SUCCESS:
      return {
        loading: false,
        success: true,
        nominations: action.payload,
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

export const cartReducer = (state = { movieNominations: [] }, action) => {
  switch (action.type) {
    case MOVIE_ADD_NOMINATION:
      const item = action.payload;

      const existItem = state.movieNominations.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          movieNominations: state.movieNominations.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          movieNominations: [...state.movieNominations, item],
        };
      }
    case MOVIE_REMOVE_NOMINATION:
      return {
        ...state,
        movieNominations: state.movieNominations.filter((x) => x.product !== action.payload),
      };
    case MOVIE_CLEAR_NOMINATION:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
