import { SET_MODAL } from "./consts";
import { IModalActionsTypes, ISideModalState } from "./types";

export const Reducer = (
  state: ISideModalState,
  action: IModalActionsTypes
) => {
  switch (action.options) {
    case SET_MODAL:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};
