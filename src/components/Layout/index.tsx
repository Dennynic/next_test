import React, { FC } from "react";

type ChildrenProps = {
  title?: string;
  children: React.ReactNode;
};
export const Layout: FC<ChildrenProps> = ({
  title = "Тестовое задание",
  children,
}) => {
  return (
    <div className="min-h-screen bg-dark-50">
      <header className="flex justify-center items-center">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="max-w-[1442px] mx-auto bg-gray-500 rounded-xl">
            <h1 className="text-6xl leading-snug font-normal text-sky-50 py-1.5">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};
