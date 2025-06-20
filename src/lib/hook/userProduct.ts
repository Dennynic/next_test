"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { getProducts } from "@/lib/api/goods/service";
import { Product } from "@/lib/api/goods/model";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const pageRef = useRef(1); // Используем ref вместо state для page
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialFetchDone, setIsInitialFetchDone] = useState(false);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await getProducts({ page: pageRef.current });

      setProducts((prev) => {
        const newItems = data.items.filter(
          (newItem) => !prev.some((item) => item.id === newItem.id)
        );
        return [...prev, ...newItems];
      });
      setHasMore(data.page * data.amount < data.total);
      pageRef.current += 1;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (!isInitialFetchDone) {
      loadMore();
      setIsInitialFetchDone(true);
    }
  }, [isInitialFetchDone, loadMore]);

  return { products, loadMore, hasMore, isLoading, error };
};
