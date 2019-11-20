import { SET_REGISTER_EMAIL } from "./consts";

export interface IRegisterState {
  email?: string;
}

export interface IRegisterActions {
  payload: string;
  email?: typeof SET_REGISTER_EMAIL;
}

export interface IRegisterStore {
  state: IRegisterState;
  actions: IRegisterAction;
}

export interface IRegisterAction {
  setRegister(email: string): void;
}

export type IRegisterActionsTypes = IRegisterActions;
