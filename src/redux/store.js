import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

export default createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger)
);

// Flow redux
// Page -> Action(counter) -> Reducer(counter) -> mengubah state(count)
