import { SET_TOOGLE } from "./consts";
// ENUMS
export enum Modals {
  DEFAULT = ""
}

export enum ModalsTypes {
  DEFAULT = ""
}

export enum ModalsHeader {
  DEFAULT = ""
}

// INTERFACES
export interface ISideModalState {
  toogle: IToogleType;
}
export interface IToogleType {
  open: boolean;
  type: Modals;
  title?: string;
  store?: IToogleStore;
  header?: string;
}
export interface IToogleActions {
  payload: IToogleType;
  toogle: typeof SET_TOOGLE;
}
export interface IToogleStore {
  type: string;
  field: string;
}
export interface ISideModalStore {
  state: ISideModalState;
  actions: ISideModalAction;
}

export interface ISideModalAction {
  setToogle(toogle: IToogleType): void;
}

export type IToogleActionsTypes = IToogleActions;
