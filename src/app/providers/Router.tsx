import { Navigate, Route, Routes } from 'react-router-dom';

import { GuestGuard, AuthGuard } from '../../entities/session';

import { AuthPage, HomePage, NotFoundPage } from '../../pages';

export const Router = () => {
  //  chech Auth
  let isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <GuestGuard isAuth={isAuth}>
            <HomePage />
          </GuestGuard>
        }
      />
      <Route
        path="/auth"
        element={
          <AuthGuard isAuth={isAuth}>
            <AuthPage />
          </AuthGuard>
        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
