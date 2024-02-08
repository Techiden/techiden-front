import React from "react";
import { smoothScrollToElementById } from "../helpers/utils";

interface RequestDemoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width?: string;
}
const RequestDemoButton = ({
  title,
  width,
  className,
  ...rest
}: RequestDemoButtonProps) => {
  const buttonClassName = `linear-gradient xl:py-4 py-2 text-black font-bold text-lg md:text-lg xl:text-xl rounded-full ${
    width ? width : "w-full"
  } ${className || ""}`;
  return (
    <button
      className={buttonClassName}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        smoothScrollToElementById("contact");
      }}>
      {title}
    </button>
  );
};

export default RequestDemoButton;
