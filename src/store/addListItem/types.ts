import { SET_USER } from "./consts";

export interface IAddListItemState {
  names: string[];
}

interface IAddListItemAction {
  payload: string[];
  type: typeof SET_USER;
}

export interface IAddListItemStore {
  state: IAddListItemState;
  actions: IAddListItemActions;
}

export interface IAddListItemActions {
  setNames(names: string[]): void;
}

export type AddListItemActionTypes = IAddListItemAction;
