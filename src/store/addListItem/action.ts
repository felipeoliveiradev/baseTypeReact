import { useReducer } from "react";
import { SET_USER } from "./consts";
import { Reducer } from "./reducer";
import {
  IAddListItemActions,
  IAddListItemState,
  IAddListItemStore
} from "./types";

export const defaultState: IAddListItemState = {
  names: []
};

export const defaultActions: IAddListItemActions = {
  setNames: (names: string[]) => null
};

export const AddListItemStore = (
  initialState = defaultState
): IAddListItemStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setNames = (names: string[]) => {
    dispatch({
      payload: names,
      type: SET_USER
    });
  };

  return {
    actions: {
      setNames
    },
    state
  };
};
