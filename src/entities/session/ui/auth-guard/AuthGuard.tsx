import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps extends React.PropsWithChildren {
  isAuth: boolean;
}

export const AuthGuard: React.FunctionComponent<AuthGuardProps> = ({
  children,
  isAuth,
}) => {

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
