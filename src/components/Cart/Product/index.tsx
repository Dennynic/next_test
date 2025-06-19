import React, { FC } from "react";

type ProductProps = {
  title: string;
  count: number;
  totalSum: number;
};

export const ProductItem: FC<ProductProps> = ({ title, count, totalSum }) => {
  return (
    <div className="flex items-center justify-between text-lg text-gray-700">
      <span>
        {title} X{count}
      </span>
      <span className="font-semibold">{totalSum}</span>
    </div>
  );
};
