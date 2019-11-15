
import { ISideModalAction, ISideModalState } from "./sideModal/types";

export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  sideModal: ISideModalState;
}

export interface IActions {
  sideModalAction: ISideModalAction;
}

export type IStore = () => IStoreContent;
