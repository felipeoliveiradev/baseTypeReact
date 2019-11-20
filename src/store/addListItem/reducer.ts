import { SET_USER } from "./consts";
import { AddListItemActionTypes, IAddListItemState } from "./types";

export const Reducer = (state: IAddListItemState, action: AddListItemActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, names: action.payload };
    default:
      return state;
  }
};
