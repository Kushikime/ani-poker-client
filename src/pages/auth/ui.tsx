import { Box } from '@components/box/Box';
import { Logo } from '@components/index';
import { AuthForm } from '@entities/auth/ui/AuthForm';

export const AuthPage = () => {
  return (
    <Box className="auth page flex-center flex-col" fh fw>
      <Logo />
      <AuthForm />
    </Box>
  );
};
