import React from 'react';
import { Navigate } from 'react-router-dom';

interface GuestGuardProps extends React.PropsWithChildren {
  isAuth: boolean;
}

export const GuestGuard: React.FunctionComponent<GuestGuardProps> = ({
  children,
  isAuth,
}) => {

  if (!isAuth) {
    return <Navigate to="/auth"/>
  }

  return <div>{children}</div>;
};
