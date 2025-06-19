"use client";
import React, { FC, useState } from "react";

interface QuantityControlProps {
  totalCount: number;
  onChange: (number: number) => void;
}

export const QuantityControl: FC<QuantityControlProps> = ({
  totalCount,
  onChange,
}) => {
  const [currentCount, setCurrentCount] = useState(totalCount);
  const handleUpCount = () => {
    const newCount = currentCount + 1;
    setCurrentCount(newCount);
    onChange(newCount);
  };

  const handleDownCount = () => {
    const newCount = currentCount > 0 ? currentCount - 1 : currentCount;
    setCurrentCount(newCount);
    onChange(newCount);
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
