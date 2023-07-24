import { FC, PropsWithChildren } from 'react';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="app green">
      <div className="BGWrapper"></div>
      {children}
    </div>
  );
};
