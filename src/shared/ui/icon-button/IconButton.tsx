import React, { ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.less';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
}

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  icon,
  className,
  size = 'medium',
  ...rest
}) => {
  const classNames = [styles.iconButton, styles[size], className].join(' ');

  return (
    <button className={classNames} {...rest}>
      <img src={icon} />
    </button>
  );
};
