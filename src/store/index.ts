import { AddListItemStore } from "./addListItem/action";
import { LoadingStore } from "./loading/action";
import { RegisterStore } from "./register/action";
import { SideModalStore } from "./sideModal/action";
// Import Store
import { IStore, IStoreContent } from "./types";

export const Store: IStore = (): IStoreContent => {
  const addListItemStore = AddListItemStore();
  const sideModalStore = SideModalStore();
  const registerStore = RegisterStore();
  const loadingStore = LoadingStore();
  // import register
  return {
    actions: {
      addListItemAction: addListItemStore.actions,
      registerAction: registerStore.actions,
      sideModalAction: sideModalStore.actions,
      loadingAction: loadingStore.actions,
      // actions
    },
    state: {
      addListItem: addListItemStore.state,
      register: registerStore.state,
      sideModal: sideModalStore.state,
      loading: loadingStore.state,
      // state
    }
  };
};
