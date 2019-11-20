import { SideModalStore } from "./sideModal/action";
// Import Store

import { IStore, IStoreContent } from "./types";

export const Store: IStore = (): IStoreContent => {
  const sideModalStore = SideModalStore();
  // import register
  return {
    actions: {
      sideModalAction: sideModalStore.actions,
      // actions
    },
    state: {
      sideModal: sideModalStore.state,
      // state
    }
  };
};
