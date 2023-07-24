import React, { ButtonHTMLAttributes } from 'react';
import styles from './Box.module.less';

interface BoxProps extends ButtonHTMLAttributes<HTMLDivElement> {
  variant?: 'transparent' | '';
  fh?: boolean;
  fw?: boolean;
}

export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  className,
  variant = '',
  fh = false,
  fw = false,
  ...rest
}) => {
  const classNames = [
    styles.box,
    className,
    styles[variant],
    fh ? 'fh' : undefined,
    fw ? 'fw' : undefined,
  ]
    .join(' ')
    .trim();

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};
