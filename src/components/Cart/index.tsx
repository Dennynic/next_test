"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ProductItem } from "./Product";
import { Input } from "../ui/Input";
import { FormItems } from "../ui/FormItems";
import { Button } from "../ui/Button";
import { Alert } from "../ui/Alert";

const data = [
  { id: 1, title: "Товар 1", count: 3, totalSum: 12345 },
  { id: 2, title: "Товар 2", count: 44, totalSum: 12345 },
];

const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+?[0-9\s\-]+$/, "Номер телефона должен содержать только цифры")
    .min(10, "Слишком короткий номер")
    .required("Обязательное поле"),
});

export const Cart = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);
  const cartTitle = data.length ? "Добавленные товары" : "Корзина пуста";
  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema: phoneSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        setSubmittingError(null);
        //request to server
        formik.resetForm();
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (err: any) {
        setSubmittingError(err.message);
      }
    },
  });

  const isButtonDisable = !formik.isValid || !formik.values["phone"];

  return (
    <section className="flex justify-center">
      <div className="mb-8 p-6 w-fit bg-blue-50 border border-blue-200 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{cartTitle}</h2>
        <div className="space-y-2 mb-6">
          {data.map((item) => (
            <ProductItem
              key={item.id}
              title={item.title}
              count={item.count}
              totalSum={item.totalSum}
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <form onSubmit={formik.handleSubmit}>
            <FormItems>
              <Input
                name="phone"
                type="tel"
                formik={formik}
                placeholder="+7 (XXX) XXX-XX-XX"
              />
              <Button type="submit" disabled={isButtonDisable}>
                Отправить
              </Button>

              <div>
                {!formik.isValid && !!formik.submitCount && (
                  <Alert color="red">Ошибка при отправке</Alert>
                )}
                {submittingError && (
                  <Alert color="red">{submittingError}</Alert>
                )}
                {successMessageVisible && (
                  <Alert color="green">Заказ отправлен</Alert>
                )}
              </div>
            </FormItems>
          </form>
        </div>
      </div>
    </section>
  );
};
