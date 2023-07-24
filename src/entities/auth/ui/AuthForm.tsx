import { Box, Button, IconButton, TextInput } from '@components/index';
import { Immutable } from 'immer';
import {
  CSSProperties,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';

import LoginIcon from '../../../../public/assets/images/icons/LoginIcon.png';
import MailIcon from '../../../../public/assets/images/icons/MailIcon.png';
import GoogleIcon from '../../../../public/assets/images/icons/GoogleIcon.png';
import GithubIcon from '../../../../public/assets/images/icons/GithubIcon.png';
import PasswordIcon from '../../../../public/assets/images/icons/PasswordIcon.png';
import SuccessIcon from '../../../../public/assets/images/icons/SuccessIcon.png';

import { yupResolver } from '@hookform/resolvers/yup';

const BoxStyles: CSSProperties = {
  width: '600px',
  // minHeight: '240px',
  height: 'auto',
  borderRadius: '15px',
  alignItems: 'center',
  flexDirection: 'column',
  display: 'flex',
  padding: '50px 25px',
  WebkitTransition: 'height  ease 0.2s',
  MozTransition: 'height  ease 0.2s',
  OTransition: 'height ease 0.2s',
  transition: 'height  ease 0.2s',
  backdropFilter: 'blur(2px)',
};

enum AuthState {
  INIT = 'INIT',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  CONFIRM = 'CONFIRM',
  SUCCESS = 'SUCCESS',
}

type FormFieldValueTypes = Immutable<{
  email: string;
  password: string;
  repeatPassword: string;
  confirmationCode: string;
}>;

const getFieldsSchema = (): SchemaOf<FormFieldValueTypes> =>
  object({
    email: string().required('Please enter an email'),
    password: string().required('Please enter a password'),
    repeatPassword: string().required('Please enter a password'),
    confirmationCode: string().required('Please enter the confirmation code'),
  });

export const AuthForm: FC<PropsWithChildren> = (props) => {
  const [authFormState, setAuthFormState] = useState<AuthState>(AuthState.INIT);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      confirmationCode: '',
    },
    resolver: yupResolver(getFieldsSchema()),
  });
  useEffect(() => {
    console.log('formState: ', formState);
  }, [formState]);

  const email = useWatch({ control, name: 'email' }) as unknown as string;
  const password = useWatch({ control, name: 'password' }) as unknown as string;
  const repeatPassword = useWatch({
    control,
    name: 'repeatPassword',
  }) as unknown as string;
  const confirmationCode = useWatch({
    control,
    name: 'confirmationCode',
  }) as unknown as string;

  useEffect(() => {
    if (authFormState === AuthState.INIT && email.length) {
      setAuthFormState(AuthState.LOGIN);
    }
    if (authFormState === AuthState.LOGIN && !email.length) {
      setAuthFormState(AuthState.INIT);
    }
  }, [email]);

  const isConfirmCodeNotEmpty = confirmationCode.length > 0;

  const onSubmit = useCallback(
    // Add types for Signup/SignIn/Confirm/etc.. RequestBody
    async (formValues: any) => {
      try {
        switch (authFormState) {
          case AuthState.LOGIN:
            // await login(formValues).unwrap();
            break;
          case AuthState.SIGNUP:
            // await signUp(formValues).unwrap();
            break;
          case AuthState.CONFIRM:
            // await confirmEmail(formValues).unwrap();
            break;
        }
      } catch (error) {
        // dispatch(
        //   showError({
        //     primary: t('validation.passwordResetLinkExpired'),
        //   })
        // );
      }
    },
    []
  );
  let height = '';
  switch (authFormState) {
    case AuthState.LOGIN:
      if (email.length) {
        height = '260px';
      }
      if (password.length) {
        height = '300px';
      }
      break;
    case AuthState.SIGNUP:
      height = '150px';
      if (email.length) {
        height = '240px';
      }
      if (password.length) {
        height = '400px';
      }
      break;
    case AuthState.CONFIRM:
      height = '220px';
      break;
    case AuthState.SUCCESS:
      height = '300px';
      break;
    default:
      height = '280px';
      break;
  }

  return (
    <form onSubmit={handleSubmit(() => console.log('SUBMIT!'))}>
      <Box variant="transparent" style={{ ...BoxStyles, height }}>
        {authFormState !== AuthState.CONFIRM &&
          authFormState !== AuthState.SUCCESS && (
            <TextInput
              title="Email"
              name="email"
              control={control}
              image={LoginIcon}
            />
          )}

        {authFormState === AuthState.INIT && (
          <>
            <span
              style={{
                height: '1px',
                width: '300px',
                background: 'white',
                marginBottom: '10px',

                minHeight: '1px',
              }}
            ></span>
            <Box>
              <Box
                className="flex-center space-between"
                style={{ gap: '20px' }}
              >
                <IconButton icon={GoogleIcon} />
                <IconButton icon={GithubIcon} />
              </Box>
              <p
                style={{
                  margin: 0,
                  textDecoration: 'underline',
                  color: 'white',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setAuthFormState(AuthState.SIGNUP);
                }}
              >
                Sign up
              </p>
            </Box>
          </>
        )}

        {(authFormState === AuthState.LOGIN ||
          authFormState === AuthState.SIGNUP) &&
          email.length > 0 && (
            <TextInput
              title="Password"
              name="password"
              control={control}
              image={PasswordIcon}
            />
          )}

        {authFormState === AuthState.LOGIN && password.length > 0 && (
          <Button onClick={() => setAuthFormState(AuthState.SUCCESS)}>
            Login
          </Button>
        )}

        {authFormState === AuthState.SIGNUP && password.length > 0 && (
          <>
            <TextInput
              title="Repeat password"
              control={control}
              name="repeatPassword"
              image={PasswordIcon}
            />

            <Button
              disabled={!(password.length > 0)}
              onClick={() => setAuthFormState(AuthState.CONFIRM)}
            >
              Sign Up
            </Button>
          </>
        )}

        {authFormState === AuthState.CONFIRM && (
          <>
            <TextInput
              title="Confirmation code"
              control={control}
              name="confirmationCode"
              image={MailIcon}
            />
            <Button
              disabled={!isConfirmCodeNotEmpty}
              onClick={() => setAuthFormState(AuthState.SUCCESS)}
            >
              Confirm Email
            </Button>
          </>
        )}

        {authFormState === AuthState.SUCCESS && (
          <Box
            className="flex-center flex-col"
            style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}
          >
            <img src={SuccessIcon} style={{ marginBottom: '20px' }} />
            Success!
            <br />
            You will be redirected to your dashboard in 5 seconds.
          </Box>
        )}
      </Box>
    </form>
  );
};
