import { CartStore } from "./CartStore";
import { makeAutoObservable } from "mobx";

export class RootStore {
  cartStore: CartStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.cartStore = new CartStore(this);
  }
}

export const rootStore = new RootStore();
export type TRootStore = InstanceType<typeof RootStore>;
