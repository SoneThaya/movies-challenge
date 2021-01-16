import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  movieSearchReducer,
  movieAddNominationReducer,
} from "./state/reducers/movieReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userNominationsReducer,
} from "./state/reducers/userReducers";

const reducer = combineReducers({
  movieSearch: movieSearchReducer,
  movieNoms: movieAddNominationReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userNominations: userNominationsReducer,
});

const movieNominationsFromStorage = localStorage.getItem("nomis")
  ? JSON.parse(localStorage.getItem("nomis"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  nominations: { movieNominations: movieNominationsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
