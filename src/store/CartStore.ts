import { makeAutoObservable, reaction, toJS } from "mobx";
import type { RootStore } from "./RootStore";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  count: number;
};

const CART_STORAGE_KEY = "cart_items";

export class CartStore {
  items: CartItem[] = [];
  isHydrated = false;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });

    if (typeof window !== "undefined") {
      this.hydrate();
    }
  }

  private hydrate() {
    this.loadFromLocalStorage();
    this.isHydrated = true;
    reaction(
      () => toJS(this.items),

      (items) => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      },
      { fireImmediately: true }
    );
  }

  private loadFromLocalStorage() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) as Array<Partial<CartItem>>;
        this.items = parsed.map((item) => ({
          id: Number(item.id),
          title: String(item.title),
          price: Number(item.price),
          count: Number(item.count),
        }));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      this.clearCart();
    }
  }

  clearCart() {
    this.items = [];
    if (typeof window !== "undefined") {
      localStorage.removeItem(CART_STORAGE_KEY);
    }
  }

  addItem(item: CartItem) {
    const existingItem = this.getItem(item.id);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.items.push({ ...item, count: 1 });
    }
  }

  getItem(id: number): CartItem | undefined {
    return this.items.find((item) => item.id === id);
  }

  removeItem(item: CartItem) {
    const existingItem = this.getItem(item.id);
    if (!existingItem) return;
    existingItem.count -= 1;
    if (existingItem.count === 0) {
      this.items = this.items.filter((i) => i.id !== item.id);
    }
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.count, 0);
  }

  get itemCount() {
    return this.items.reduce((count, item) => count + item.count, 0);
  }
}
