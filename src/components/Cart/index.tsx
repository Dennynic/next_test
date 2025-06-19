import React from "react";

export const Cart = () => {
  return (
    <section className="flex justify-center">
      <div className="mb-8 p-6 w-fit bg-blue-50 border border-blue-200 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Добавленные товары
        </h2>
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-lg text-gray-700">
            <span>товар 1 x3</span>
            <span className="font-semibold">3645P</span>
          </div>

          <div className="flex items-center justify-between text-lg text-gray-700">
            <span>товарр 2 x44</span>
            <span className="font-semibold">53460P</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="tel"
            placeholder="+7 (___)-___-___"
            className="flex-grow bg-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full sm:w-auto">
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};
