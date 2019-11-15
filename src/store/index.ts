import { SideModalStore } from "./sideModal/action";
import { IStore, IStoreContent } from "./types";

export const Store: IStore = (): IStoreContent => {
  const sideModalStore = SideModalStore();

  return {
    actions: {
      sideModalAction: sideModalStore.actions
    },
    state: {
      sideModal: sideModalStore.state
    }
  };
};
