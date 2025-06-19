import { FC } from "react";
import cn from "classnames";

interface AlertProps {
  color: "red" | "green";
  children: React.ReactNode;
}
export const Alert: FC<AlertProps> = ({ color, children }) => {
  const colorClasses = {
    red: "bg-red-100 border-red-400 text-red-700",
    green: "bg-green-100 border-green-400 text-green-700",
  };
  return <div className={cn(colorClasses[color])}>{children}</div>;
};
