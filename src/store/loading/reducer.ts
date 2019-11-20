import { SET_LOADING } from "./consts";
import { ILoadingState, LoadingActionTypes } from "./types";

export const Reducer = (state: ILoadingState, action: LoadingActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
