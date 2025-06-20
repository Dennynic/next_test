"use client";

import React, { FC, useRef, useEffect } from "react";
import { FormikProps } from "formik";
import { debounce } from "lodash";

interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  label?: string;
  formik: FormikProps<any>;
  onValueChange?: (name: string, value: string) => void;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  name,
  label,
  formik,
  onValueChange,
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const isDisabled = formik.isSubmitting;
  const isInvalid = !!error;

  const debouncedValidateRef = useRef(
    debounce((fieldName: string, fieldValue: string) => {
      formik.setFieldValue(fieldName, fieldValue, true);
      onValueChange?.(fieldName, fieldValue);
    }, 300)
  );

  useEffect(() => {
    return () => {
      debouncedValidateRef.current.cancel();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    formik.setFieldValue(name, value, false);

    debouncedValidateRef.current(name, value);
  };

  const handleBlur = () => {
    formik.setFieldTouched(name, true, true);
    onValueChange?.(name, value);
  };

  return (
    <div className="w-full">
      {label && !isInvalid && (
        <label className="block mb-1 text-sm" htmlFor={name}>
          {label}
        </label>
      )}
      {isInvalid && (
        <label className="text-red-500 text-sm mb-1 block" htmlFor={name}>
          {error}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="flex-grow bg-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
      />
    </div>
  );
};
