import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.less';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FunctionComponent<InputProps> = ({
  className,
  ...rest
}) => {
  const classNames = React.useMemo(
    () => [styles.input, className].join(' '),
    [className]
  );

  return <input className={classNames} {...rest} />;
};
