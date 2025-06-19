"use client";
import React, { FC, useState } from "react";
import { Product } from "@/lib/api/goods/model";
import { CartItem } from "@/store/CartStore";

interface QuantityControlProps {
  item: Product;
  totalCount: number;
  onChange: (number: number) => void;
  onChangeCountUp: (item: CartItem) => void;
  onChangeDown: (id: number) => void;
}

export const QuantityControl: FC<QuantityControlProps> = ({
  item,
  totalCount,
  onChange,
  onChangeCountUp,
  onChangeDown,
}) => {
  const [currentCount, setCurrentCount] = useState(totalCount);
  const handleUpCount = () => {
    const newCount = currentCount + 1;
    const newItem = { ...item, count: newCount } as CartItem;
    setCurrentCount(newCount);
    onChange(newCount);
    onChangeCountUp(newItem);
  };

  const handleDownCount = () => {
    const newCount = currentCount > 0 ? currentCount - 1 : currentCount;
    setCurrentCount(newCount);
    onChange(newCount);
    onChangeDown(item.id);
  };

  return (
    <div className="flex items-center justify-center w-full space-x-2">
      <button
        onClick={handleDownCount}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        -
      </button>
      <span className="text-xl font-bold text-gray-800">{currentCount}</span>
      <button
        onClick={handleUpCount}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        +
      </button>
    </div>
  );
};
