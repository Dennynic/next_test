import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  count: number;
};

export class CartStore {
  items: CartItem[] = [];

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addItem(item: CartItem) {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.items.push({ ...item, count: 1 });
    }
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.count, 0);
  }

  get itemCount() {
    return this.items.reduce((count, item) => count + item.count, 0);
  }
}
