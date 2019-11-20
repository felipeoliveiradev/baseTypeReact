import { SET_MODAL } from "./consts";
// ENUMS
export enum ModalsBodyTypes {
  DEFAULT = "",
  REGISTER = "register",
  PROFILE = "profile",
  EDIT = "edit"
}

export enum ModalsFields {
  DEFAULT = "",
  CELLPHONE = "cellphone",
  NAME= "name",
  EMAIL = "email"
}

export enum ModalsHeaderTypes {
  DEFAULT = "",
  CHANGES= "changes"
}
export enum ModalsIcon {
  CURRENCY = "currency",
  STORE = "store"
}

// INTERFACES
export interface ISideModalState {
  options: IModalsTypes;
}
export interface IModalsTypes {
  state: boolean;
  body: IModalBody;
  title?: string;
  header: IHeaderModal;
}
export interface IModalBody {
  type?: string;
  custom?: JSX.Element;
  field?: string;
}
export interface IHeaderModal {
  name?: string;
  type?: string;
  subName?: string;
  icon?: string;
  custom?: JSX.Element;
}

export interface IModalAction {
  payload: IModalsTypes;
  options: typeof SET_MODAL;
}
export interface ISideModalStore {
  state: ISideModalState;
  actions: ISideModalAction;
}

export interface ISideModalAction {
  setOptions(options: IModalsTypes): void;
}

export type IModalActionsTypes = IModalAction;
