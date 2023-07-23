import { Navigate, Route, Routes } from 'react-router-dom';

import { GuestGuard, AuthGuard } from '../../entities/session';

import { HomePage } from '../../pages/home';
import { NotFoundPage } from '../../pages/not-found';
import { AuthPage } from '../../pages/auth';

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
