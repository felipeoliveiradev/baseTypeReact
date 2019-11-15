import React, { createContext } from "react";
import { Store } from "./store";
import { IStore, IStoreContent } from "./store/types";

import {
  defaultActions as addSideModalDefaultActions,
  defaultState as addSideModalDefaultState
} from "./store/sideModal/action";


interface IProviderProps {
  children: JSX.Element;
}

const ContextStore = (useValue: IStore) => {
  const Context = createContext<IStoreContent>({
    state: {
      sideModal: addSideModalDefaultState
    },
    // tslint:disable-next-line: object-literal-sort-keys
    actions: {
      sideModalAction: addSideModalDefaultActions
    }
  });

  const Provider = (props: IProviderProps) => {
    const value = useValue();
    const { children } = props;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Context,
    Provider
  };
};

export const AppContext = ContextStore(Store);
