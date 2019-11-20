
import { ISideModalAction, ISideModalState } from "./sideModal/types";
// import

export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  sideModal: ISideModalState;
  // state
}

export interface IActions {
  sideModalAction: ISideModalAction;
  // action
}

export type IStore = () => IStoreContent;
