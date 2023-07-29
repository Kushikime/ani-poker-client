import { AuthForm } from '../../entities/auth';

export const AuthPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'brightness(60%)',
      }}
    >
      <AuthForm />
    </div>
  );
};
