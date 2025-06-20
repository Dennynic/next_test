import { makeAutoObservable, reaction, toJS } from "mobx";
import type { RootStore } from "./RootStore";

const FORM_STORAGE_KEY = "form_data";

export class FormStore {
  phone = "";
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
      () => toJS(this.phone),
      (phone) => {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify({ phone }));
      },
      { fireImmediately: true }
    );
  }

  private loadFromLocalStorage() {
    try {
      const formData = localStorage.getItem(FORM_STORAGE_KEY);
      if (formData) {
        const parsed = JSON.parse(formData);
        this.phone = parsed.phone || "";
      }
    } catch (error) {
      console.error("Failed to load form data from localStorage", error);
      this.clear();
    }
  }

  setPhone(phone: string) {
    this.phone = phone;
  }

  clear() {
    this.phone = "";
    if (typeof window !== "undefined") {
      localStorage.removeItem(FORM_STORAGE_KEY);
    }
  }

  get phoneNumber() {
    return this.phone;
  }
}
