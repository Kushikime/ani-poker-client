import { AuthGuard, GuestGuard } from '@entities/index';
import { AuthPage, HomePage, NotFoundPage } from '@pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  // TO-DO: Implement auth check
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
