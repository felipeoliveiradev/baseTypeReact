import { useReducer } from "react";
import { SET_TOOGLE } from "./consts";
import { Reducer } from "./reducer";
import {
  ISideModalAction,
  ISideModalState,
  ISideModalStore,
  IToogleType,
  Modals,
  ModalsHeader
} from "./types";

export const defaultState: ISideModalState = {
  toogle: {
    header: ModalsHeader.DEFAULT,
    open: false,
    store: {
      field: "",
      type: ""
    },
    title: "",
    type: Modals.DEFAULT
  }
};

export const defaultActions: ISideModalAction = {
  setToogle: (toogle: IToogleType) => ({ open: false, type: Modals.DEFAULT, title: "", store: [], header: ModalsHeader.DEFAULT })
};

export const SideModalStore = (
  initialState = defaultState
): ISideModalStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setToogle = (toogle: IToogleType) => {
    dispatch({
      payload: toogle,
      toogle: SET_TOOGLE
    });
  };

  return {
    actions: {
      setToogle
    },
    state
  };
};
