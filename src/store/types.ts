import { IAddListItemActions, IAddListItemState } from "./addListItem/types";
import { IRegisterAction, IRegisterState } from "./register/types";
import { ISideModalAction, ISideModalState } from "./sideModal/types";
import { ILoadingActions, ILoadingState } from "./loading/types";
// import
export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  addListItem: IAddListItemState;
  sideModal: ISideModalState;
  register: IRegisterState;
  loading: ILoadingState;
  // state
}

export interface IActions {
  addListItemAction: IAddListItemActions;
  sideModalAction: ISideModalAction;
  registerAction: IRegisterAction;
   loadingAction: ILoadingActions;
  // action
}

export type IStore = () => IStoreContent;
