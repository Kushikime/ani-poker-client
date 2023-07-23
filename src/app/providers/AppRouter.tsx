import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { GuestGuard, AuthGuard } from '../../entities/session';

import { HomePage } from '../../pages/home';
import { NotFoundPage } from '../../pages/not-found';
import { LoginPage } from '../../pages/login';
import { RegisterPage } from '../../pages/register';

export const AppRouter = () => {
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
        path="/login"
        element={
          <AuthGuard isAuth={isAuth}>
            <LoginPage />
          </AuthGuard>
        }
      />
      <Route
        path="/register"
        element={
          <AuthGuard isAuth={isAuth}>
            <RegisterPage />
          </AuthGuard>
        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
