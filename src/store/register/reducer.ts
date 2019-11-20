import { SET_REGISTER_EMAIL } from "./consts";
import { IRegisterActionsTypes, IRegisterState } from "./types";

export const Reducer = (
  state: IRegisterState,
  action: IRegisterActionsTypes
) => {
  switch (action.email) {
    case SET_REGISTER_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
