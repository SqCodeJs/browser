import { Keyword } from "../../types/types";
import { ActionType } from "../action-types";
import { Action } from "../action/actionsTypes";

const initialState: Keyword[] = [];
const filterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_FILTER:
      return [...state, action.payload];
    case ActionType.REMOVE_FILTER:
      return [...state.filter((filter) => filter !== action.payload)];
    case ActionType.CLEAR_FILTERS:
      return (state = []);
    default:
      return state;
  }
};
export default filterReducer;
