import { useReducer } from "react";
import { SET_LOADING } from "./consts";
import { Reducer } from "./reducer";
import {
  ILoadingActions,
  ILoadingState,
  ILoadingStore,
  ILoadingType,
  TypeLoading
} from "./types";

export const defaultState: ILoadingState = {
  loading: {
    state: true,
    type: TypeLoading.DEFAULT
  }
};

export const defaultActions: ILoadingActions = {
  setLoading: (loading: ILoadingType) => ({
    state: true,
    type: TypeLoading.DEFAULT
  })
};

export const LoadingStore = (initialState = defaultState): ILoadingStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setLoading = (loading: ILoadingType) => {
    dispatch({
      payload: loading,
      type: SET_LOADING
    });
  };

  return {
    actions: {
      setLoading
    },
    state
  };
};
