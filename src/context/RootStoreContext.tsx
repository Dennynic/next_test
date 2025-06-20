"use client";

import { createContext, useContext, ReactNode } from "react";
import { rootStore, TRootStore } from "@/store/RootStore";

const RootStoreContext = createContext<TRootStore | null>(null);

interface RootStoreProviderProps {
  children: ReactNode;
  store?: TRootStore;
}

export const RootStoreProvider = ({
  children,
  store = rootStore,
}: RootStoreProviderProps) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = (): TRootStore => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }
  return store;
};

export const useCartStore = () => useRootStore().cartStore;
export const useFormStore = () => useRootStore().formStore;
