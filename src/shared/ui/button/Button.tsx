import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.less";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  size = "medium",
  className,
  ...rest
}) => {
  const classNames = [styles.button, styles[size], className].join(" ");

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};
