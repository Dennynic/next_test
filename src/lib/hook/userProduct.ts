"use client";
import { useState, useEffect, useCallback } from "react";
import { getProducts } from "@/lib/api/goods/service";
//import { GetProductsResponse } from "@/lib/api/goods/model";
import { Product } from "@/lib/api/goods/model";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await getProducts({ page });
      setProducts((prev) => [...prev, ...data.items]);
      setHasMore(data.page * data.amount < data.total);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore]);

  useEffect(() => {
    loadMore();
  }, []);

  return { products, loadMore, hasMore, isLoading, error };
};
