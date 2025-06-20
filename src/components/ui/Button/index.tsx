import React, { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customProps?: string;
  children: React.ReactNode;
  customClassName?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  customClassName = "",
  ...rest
}) => {
  const baseClasses =
    "bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md w-full sm:w-auto";

  const disabledClasses = "bg-gray-400 cursor-not-allowed";

  const activeClasses = "hover:bg-blue-700 transition duration-300 ease-in-out";

  const mergedClasses = twMerge(
    baseClasses,
    disabled ? disabledClasses : activeClasses,
    customClassName
  );
  return (
    <button {...rest} disabled={disabled} className={mergedClasses}>
      {children}
    </button>
  );
};
