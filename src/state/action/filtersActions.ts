import { Keyword } from "../../types/types";
import { Action } from "../action/actionsTypes";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
export const AddFilter = (filter: Keyword) => {
  console.log("dodaje");
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_FILTER,
      payload: filter,
    });
  };
};
export const RemoveFilter = (filter: Keyword) => {
  return (dispatch: Dispatch<Action>) => {
    console.log("usowam");
    dispatch({
      type: ActionType.REMOVE_FILTER,
      payload: filter,
    });
  };
};
export const ClearFilters = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAR_FILTERS,
    });
  };
};
