import React from 'react';

import styles from './Box.module.less';

interface BoxProps extends React.PropsWithChildren {
  className?: string;
  variant: 'transparent' | 'classic';
}

export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  const classNames = [styles.box, styles[variant], className].join(' ');

  return (
    <div {...rest} className={classNames}>
      {children}
    </div>
  );
};
