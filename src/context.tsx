import React, { createContext } from "react";
import { Store } from "./store";
import { defaultActions as addSideModalDefaultActions, defaultState as addSideModalDefaultState } from "./store/sideModal/action";
// import

import { IStore, IStoreContent } from "./store/types";

interface IProviderProps {
  children: JSX.Element;
}

const ContextStore = (useValue: IStore) => {
  const Context = createContext<IStoreContent>({
    state: {
      sideModal: addSideModalDefaultState,
      // state
    },
    // tslint:disable-next-line: object-literal-sort-keys
    actions: {
      sideModalAction: addSideModalDefaultActions,
      // actions
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
