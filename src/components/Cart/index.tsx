"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useCartStore } from "@/context/RootStoreContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { CartProduct } from "./CartProduct";

import { submitOrder } from "@/lib/api/goods/service";
import { FormCart } from "./FormCart";

const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+?[0-9\s\-]+$/, "Номер телефона должен содержать только цифры")
    .min(10, "Слишком короткий номер")
    .max(12, "Слишком длинный...")
    .required("Обязательное поле"),
});

export const Cart = observer(() => {
  const cartStore = useCartStore();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = isClient ? cartStore.items : [];

  const cartTitle = cartItems.length ? "Добавленные товары" : "Корзина пуста";

  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema: phoneSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        setSubmittingError(null);
        const cartItemsForApi = cartItems.map((item) => ({
          id: Number(item.id),
          quantity: item.count,
        }));

        await submitOrder({
          phone: values.phone,
          cart: cartItemsForApi,
        });

        cartStore.clearCart();

        formik.resetForm();
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (err: any) {
        setSubmittingError(err.msg);
      }
    },
  });

  const isButtonDisable =
    !formik.isValid || !formik.values["phone"] || !cartItems.length;

  //   if (!isClient) {
  //     return (
  //       <section className="flex justify-center">
  //         <div className="mb-8 p-6 w-fit bg-blue-50 border border-blue-200 rounded-xl shadow-md">
  //           <h2 className="text-2xl font-bold text-gray-800 mb-4">{cartTitle}</h2>
  //           <div className="space-y-2 mb-6" />
  //         </div>
  //       </section>
  //     );
  //   }

  return (
    <section className="flex justify-center">
      <div className="mb-8 p-6 w-fit bg-blue-50 border border-blue-200 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{cartTitle}</h2>
        <div className="space-y-2 mb-6">
          {isClient &&
            cartItems.length &&
            cartItems.map((item) => {
              const totalSum = item.count * item.price;

              return (
                <CartProduct
                  key={item.id}
                  title={item.title}
                  count={item.count}
                  totalSum={totalSum}
                />
              );
            })}
        </div>

        <FormCart
          isButtonDisable={isButtonDisable}
          formik={formik}
          successMessageVisible={successMessageVisible}
          submittingError={submittingError}
        />
      </div>
    </section>
  );
});
