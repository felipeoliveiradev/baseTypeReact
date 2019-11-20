import { useReducer } from "react";
import { SET_MODAL } from "./consts";
import { Reducer } from "./reducer";
import {
  IModalsTypes,
  ISideModalAction,
  ISideModalState,
  ISideModalStore,
  ModalsBodyTypes,
  ModalsHeaderTypes
} from "./types";

export const defaultState: ISideModalState = {
  options: {
    body: {
      type: ModalsBodyTypes.DEFAULT
    },
    header: {
      icon: "",
      name: "",
      subName: "",
      type: ModalsHeaderTypes.DEFAULT
    },

    state: false,
    title: ""
  }
};

export const defaultActions: ISideModalAction = {
  setOptions: (options: IModalsTypes) => null
};

export const SideModalStore = (
  initialState = defaultState
): ISideModalStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setOptions = (options: IModalsTypes) => {
    dispatch({
      options: SET_MODAL,
      payload: options
    });
  };

  return {
    actions: {
      setOptions
    },
    state
  };
};
