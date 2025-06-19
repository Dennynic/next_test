import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customProps?: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  customProps,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`
        bg-blue-600 
        text-white 
        font-bold 
        py-3 px-6 
        rounded-lg 
        shadow-md 
        w-full 
        sm:w-auto
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "hover:bg-blue-700 transition duration-300 ease-in-out"
        }
      `}
    >
      {children}
    </button>
  );
};
