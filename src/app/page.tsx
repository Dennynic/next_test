"use client";
import React from "react";
import ReviewsSection from "@/components/Review/ReviewSection";
import { Layout } from "@/components/Layout";
import { Cart } from "@/components/Cart";
import { GoodSection } from "@/components/GoodsSection";
import { rootStore } from "@/store/RootStore";
import { RootStoreProvider } from "@/context/RootStoreContext";

export default function Home() {
  return (
    <Layout>
      <ReviewsSection />
      <RootStoreProvider store={rootStore}>
        <Cart />
        <GoodSection />
      </RootStoreProvider>
    </Layout>
  );
}
