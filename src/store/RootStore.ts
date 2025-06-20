import { CartStore } from "./CartStore";
import { FormStore } from "./FormStore";
import { makeAutoObservable } from "mobx";

export class RootStore {
  cartStore: CartStore;
  formStore: FormStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.cartStore = new CartStore(this);
    this.formStore = new FormStore(this);
  }
}

export const rootStore = new RootStore();
export type TRootStore = InstanceType<typeof RootStore>;
