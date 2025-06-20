import React from "react";
import { GoodCard } from "./GoodCard";
import { useProducts } from "@/lib/hook/userProduct";
import dynamic from "next/dynamic";

const DynamicInfiniteScroll = dynamic(
  () => import("react-infinite-scroll-component"),
  { ssr: false }
);

export const GoodSection = () => {
  const { products, loadMore, hasMore, isLoading, error } = useProducts();
  return (
    <div className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-2xl max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Список товаров
      </h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <DynamicInfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <div className="text-center py-4 text-zinc-950">Подгружаю...</div>
        }
        endMessage={
          <p className="text-center py-4 text-shadow-black">
            Товары закончились
          </p>
        }
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <GoodCard key={`${item.id}-${item.title}`} product={item} />
          ))}
        </div>
      </DynamicInfiniteScroll>
    </div>
  );
};
