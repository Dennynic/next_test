import React from "react";
import { GoodCard } from "./GoodCard";

const products = [
  {
    id: 1,
    image_url: "https://example.com/images/laptop.jpg",
    title: "Ноутбук игровой",
    description:
      "Мощный игровой ноутбук с процессором Intel Core i7 и видеокартой RTX 3060.",
    price: 89990,
  },
  {
    id: 2,
    image_url: "https://example.com/images/smartphone.jpg",
    title: "Смартфон",
    description:
      "Флагманский смартфон с AMOLED-экраном и тройной камерой 108 Мп.",
    price: 64990,
  },
  {
    id: 3,
    image_url: "https://example.com/images/headphones.jpg",
    title: "Беспроводные наушники",
    description: "Наушники с шумоподавлением и временем работы до 30 часов.",
    price: 12990,
  },
  {
    id: 4,
    image_url: "https://example.com/images/smartwatch.jpg",
    title: "Умные часы",
    description: "Фитнес-трекер с мониторингом пульса, давления и SpO2.",
    price: 15990,
  },
  {
    id: 5,
    image_url: "https://example.com/images/tv.jpg",
    title: "Телевизор 4K",
    description: "55-дюймовый телевизор с разрешением 4K и HDR поддержкой.",
    price: 54990,
  },
  {
    id: 6,
    image_url: "https://example.com/images/coffee_machine.jpg",
    title: "Кофемашина",
    description:
      "Автоматическая кофемашина с капучинатором и 6 рецептами напитков.",
    price: 32990,
  },
  {
    id: 7,
    image_url: "https://example.com/images/air_fryer.jpg",
    title: "Аэрогриль",
    description:
      "Многофункциональный аэрогриль с 10 программами приготовления.",
    price: 8990,
  },
  {
    id: 8,
    image_url: "https://example.com/images/vacuum_cleaner.jpg",
    title: "Робот-пылесос",
    description: "Умный робот-пылесос с навигацией LiDAR и влажной уборкой.",
    price: 24990,
  },
  {
    id: 9,
    image_url: "https://example.com/images/blender.jpg",
    title: "Блендер",
    description: "Мощный блендер с 10 скоростями и функцией колки льда.",
    price: 5990,
  },
  {
    id: 10,
    image_url: "https://example.com/images/gaming_console.jpg",
    title: "Игровая консоль",
    description:
      "Новейшая игровая консоль с SSD-накопителем и поддержкой 4K 120 Гц.",
    price: 49990,
  },
];

export const GoodSection = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-2xl max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Список товаров
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <GoodCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image_url={item.image_url}
          />
        ))}
      </div>
    </div>
  );
};
