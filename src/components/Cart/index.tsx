"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useCartStore, useFormStore } from "@/context/RootStoreContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { CartProduct } from "./CartProduct";

import { submitOrder } from "@/lib/api/goods/service";
import { FormCart } from "./FormCart";

interface ApiError extends Error {
  message: string;
  status?: number;
}

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
  const formStore = useFormStore();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = isClient ? cartStore.items : [];
  const cartTitle = cartItems.length ? "Добавленные товары" : "Корзина пуста";
  const { phoneNumber } = formStore;

  const formik = useFormik({
    initialValues: { phone: phoneNumber || "" },
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
        formStore.clear();

        formik.resetForm({
          values: { phone: "" },
        });

        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (error) {
        const apiError = error as ApiError;
        setSubmittingError(
          apiError.message || "Произошла ошибка при отправке заказа"
        );
      }
    },
  });

  const handleInputChange = (name: string, value: string) => {
    if (name === "phone") {
      formStore.setPhone(value);
    }
  };

  const isButtonDisable =
    !formik.isValid || !formik.values["phone"] || !cartItems.length;

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
          handleInputChange={handleInputChange}
        />
      </div>
    </section>
  );
});
