"use client";
import React, { FC, useState } from "react";
import { CartItem } from "@/store/CartStore";

interface QuantityControlProps {
  item: CartItem;
  onChangeCountUp: (item: CartItem) => void;
  onChangeDown: (item: CartItem) => void;
}

export const QuantityControl: FC<QuantityControlProps> = ({
  item,
  onChangeCountUp,
  onChangeDown,
}) => {
  const handleUpCount = () => {
    onChangeCountUp(item);
  };

  const handleDownCount = () => {
    onChangeDown(item);
  };

  return (
    <div className="flex items-center justify-center w-full space-x-2">
      <button
        onClick={handleDownCount}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        -
      </button>
      <span className="text-xl font-bold text-gray-800">{item.count}</span>
      <button
        onClick={handleUpCount}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        +
      </button>
    </div>
  );
};
