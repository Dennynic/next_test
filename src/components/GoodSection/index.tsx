
//     // <style>
//     //     /* Custom styles for the scrollbar, if desired */
//     //     ::-webkit-scrollbar {
//     //         width: 8px;
//     //     }
//     //     ::-webkit-scrollbar-track {
//     //         background: #f1f1f1;
//     //         border-radius: 10px;
//     //     }
//     //     ::-webkit-scrollbar-thumb {
//     //         background: #888;
//     //         border-radius: 10px;
//     //     }
//     //     ::-webkit-scrollbar-thumb:hover {
//     //         background: #555;
//     //     }
//     // </style>
// </head>
// <body class="bg-gray-100 font-sans p-4 min-h-screen flex items-center justify-center">
//     <div class="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-2xl max-w-6xl">
//         <!-- Cart Section -->
//         <div class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-md">
//             <h2 class="text-2xl font-bold text-gray-800 mb-4">Добавленные товары</h2>
//             <div class="space-y-2 mb-6">
//                 <!-- Cart Item 1 -->
//                 <div class="flex items-center justify-between text-lg text-gray-700">
//                     <span>товар 1 x3</span>
//                     <span class="font-semibold">3645P</span>
//                 </div>
//                 <!-- Cart Item 2 -->
//                 <div class="flex items-center justify-between text-lg text-gray-700">
//                     <span>товарр 2 x44</span>
//                     <span class="font-semibold">53460P</span>
//                 </div>
//             </div>
//             <div class="flex flex-col sm:flex-row gap-4 items-center">
//                 <input
//                     type="tel"
//                     placeholder="+7 (___)-___-___"
//                     class="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//                 />
//                 <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full sm:w-auto">
//                     Заказать
//                 </button>
//             </div>
//         </div>

//         <!-- Product List Section -->
//         <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Список товаров</h2>
//         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <!-- Product Card 1 -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 1</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out w-full">
//                     Купить
//                 </button>
//             </div>

//             <!-- Product Card 2 (with quantity controls) -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 2</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <div class="flex items-center justify-center w-full space-x-2">
//                     <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">-</button>
//                     <span class="text-xl font-bold text-gray-800">3</span>
//                     <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">+</button>
//                 </div>
//             </div>

//             <!-- Product Card 3 -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 3</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out w-full">
//                     Купить
//                 </button>
//             </div>

//             <!-- Product Card 4 (with quantity controls) -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 4</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <div class="flex items-center justify-center w-full space-x-2">
//                     <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">-</button>
//                     <span class="text-xl font-bold text-gray-800">44</span>
//                     <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">+</button>
//                 </div>
//             </div>

//             <!-- Product Card 5 -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 5</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out w-full">
//                     Купить
//                 </button>
//             </div>

//             <!-- Product Card 6 -->
//             <div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
//                 <img
//                     src="https://placehold.co/300x200/cccccc/333333?text=Product+Image"
//                     alt="Изображение товара"
//                     class="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
//                     onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';"
//                 />
//                 <div class="text-center flex-grow">
//                     <h3 class="text-xl font-semibold text-gray-900 mb-2">Название товара 6</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         Описание описание описание описание. ауцау, описание fe описание. fefe. ау цу цуацу ццау ау цуацуцуацу ауц
//                     </p>
//                     <p class="text-2xl font-bold text-green-600 mb-4">Цена: 1215P</p>
//                 </div>
//                 <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out w-full">
//                     Купить
//                 </button>
//             </div>
//         </div>
//     </div>
// </body>
// </html>
