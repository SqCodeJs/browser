import { Keyword } from "../../types/types";
import { ActionType } from "../action-types";
interface AddAction {
  type: ActionType.ADD_FILTER;
  payload: Keyword;
}
interface RemoveAction {
  type: ActionType.REMOVE_FILTER;
  payload: Keyword;
}
interface ClearAction {
  type: ActionType.CLEAR_FILTERS;
}
export type Action = AddAction | RemoveAction | ClearAction;
