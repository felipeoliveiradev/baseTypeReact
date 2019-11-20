import { useReducer } from "react";
import { SET_REGISTER_EMAIL } from "./consts";
import { Reducer } from "./reducer";
import { IRegisterAction, IRegisterState, IRegisterStore } from "./types";

export const defaultState: IRegisterState = {
  email: ""
};

export const defaultActions: IRegisterAction = {
  setRegister: (email: string) => ""
};

export const RegisterStore = (initialState = defaultState): IRegisterStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setRegister = (email: string) => {
    dispatch({
      email: SET_REGISTER_EMAIL,
      payload: email
    });
  };

  return {
    actions: {
      setRegister
    },
    state
  };
};
