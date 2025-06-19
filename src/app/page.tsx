import React from "react";
import ReviewsSection from "@/components/Review/ReviewSection";
import { Layout } from "@/components/Layout";
import { Cart } from "@/components/Cart";
import { GoodSection } from "@/components/GoodsSection";

export default function Home() {
  return (
    <Layout>
      <ReviewsSection />
      <Cart />
      <GoodSection />
    </Layout>
  );
}
