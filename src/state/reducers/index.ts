import filtersReducer from "./filtersReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  filters: filtersReducer,
});
export default reducers;
