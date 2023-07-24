import React, { ButtonHTMLAttributes } from 'react';
import styles from './Logo.module.less';

interface LogoProps extends ButtonHTMLAttributes<HTMLDivElement> {}

export const Logo: React.FunctionComponent<LogoProps> = ({}) => {
  const classNames = [styles.logo].join(' ').trim();

  return (
    <div className={classNames}>
      <p>
        Ani<span>Poker</span>
      </p>
    </div>
  );
};
