import { SET_TOOGLE } from "./consts";
import { ISideModalState, IToogleActionsTypes } from "./types";

export const Reducer = (
  state: ISideModalState,
  action: IToogleActionsTypes
) => {
  switch (action.toogle) {
    case SET_TOOGLE:
      return { ...state, toogle: action.payload };
    default:
      return state;
  }
};
