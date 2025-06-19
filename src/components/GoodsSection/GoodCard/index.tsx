"use client";
import React, { FC, useState } from "react";
import { ImageWithFallback } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import { QuantityControl } from "../QuantityControl";
import { useCartStore } from "@/context/RootStoreContext";
import { Product } from "@/lib/api/goods/model";

interface GoodCardProps {
  product: Product;
}

export const GoodCard: FC<GoodCardProps> = ({ product }) => {
  const { id, title, description, image_url, price } = product;
  const cartStore = useCartStore();
  const { addItem, removeItem } = cartStore;
  const [isQuantityVisible, setQuantityVisible] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const handleQuantityChange = (total: number) => {
    setTotalCount(total);
    if (total === 0) setQuantityVisible(false);
  };

  const handleButtonClick = () => {
    setQuantityVisible(true);
    setTotalCount(1);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
      <ImageWithFallback
        src={image_url}
        alt={`Изображение товара ${title}`}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
      />
      <div className="text-center flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">Цена: {price}P</p>
      </div>
      {isQuantityVisible ? (
        <QuantityControl
          item={product}
          totalCount={totalCount}
          onChange={handleQuantityChange}
          onChangeCountUp={addItem}
          onChangeDown={removeItem}
        />
      ) : (
        <Button
          onClick={handleButtonClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out w-full"
        >
          Купить
        </Button>
      )}
    </div>
  );
};
