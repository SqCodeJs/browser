import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
export const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk), composeWithDevTools())
);
