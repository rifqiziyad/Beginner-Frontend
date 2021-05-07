import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import admin from "./adminPage";

export default combineReducers({
  counter,
  auth,
  movie,
  admin,
});
