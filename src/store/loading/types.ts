import { SET_LOADING } from "./consts";

export enum TypeLoading {
  DEFAULT = "default",
  INSIDE = "inside"
}
export interface ILoadingState {
  loading: ILoadingType;
}
export interface ILoadingType {
  state?: boolean;
  type?: string;
}

interface ILoadingAction {
  payload: ILoadingType;
  type: typeof SET_LOADING;
}

export interface ILoadingStore {
  state: ILoadingState;
  actions: ILoadingActions;
}

export interface ILoadingActions {
  setLoading(loading: ILoadingType): void;
}

export type LoadingActionTypes = ILoadingAction;
