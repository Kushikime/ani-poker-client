import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};
