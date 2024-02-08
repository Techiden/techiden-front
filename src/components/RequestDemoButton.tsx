import React from "react";

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
  const buttonClassName = `linear-gradient xl:py-4 py-2 text-black font-bold xl:text-xl text-lg rounded-full ${
    width ? width : "w-full"
  } ${className || ""}`;
  return (
    <button className={buttonClassName} {...rest}>
      {title}
    </button>
  );
};

export default RequestDemoButton;
