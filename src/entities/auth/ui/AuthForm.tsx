import { useEffect, useState } from 'react';
import { Box, Button, Input } from '../../../shared/ui';

import styles from './AuthForm.module.less';

export const AuthForm = () => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState('');
  const [isRegistration, setIsRegistration] = useState(false);

  const loginMode = emailInputValue.length ? styles.loginMode : '';
  const registerMode = isRegistration ? styles.registerMode : '';

  function handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInputValue(event.target.value);
  }

  function handlePasswordInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPasswordInputValue(event.target.value);
  }

  function handleConfirmPasswordInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setConfirmPasswordInputValue(event.target.value);
  }

  function handleSignUp() {
    setIsRegistration(true);
  }

  useEffect(() => {
    if (!emailInputValue.length) {
      setPasswordInputValue('');
      setConfirmPasswordInputValue('');
      setIsRegistration(false);
    }
  }, [emailInputValue]);

  useEffect(() => {
    if (!passwordInputValue.length) {
      setConfirmPasswordInputValue('');
    }
  }, [passwordInputValue]);

  return (
    <div className={styles.main}>
      <p className={styles.ani} draggable="false">
        Ani
        <span className={styles.poker} draggable="false">
          Poker
        </span>
      </p>
      <Box variant="transparent" className={styles.formWrapper}>
        <div
          className={styles.inputWrapper}
          style={{
            marginBottom: isRegistration ? '21px' : '0',
          }}
        >
          <img
            src="/public/assets/images/auth-email-field_icon.svg"
            alt="auth-email"
            draggable="false"
          />
          <Input
            type="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleEmailInputChange}
          />
        </div>
        {emailInputValue.length ? (
          <div className={styles.inputWrapper}>
            <img
              src="/public/assets/images/auth-password-field_icon.svg"
              alt="auth-password"
              draggable="false"
            />
            <Input
              type="password"
              placeholder="Password"
              className={[styles.input, registerMode].join(' ')}
              onChange={handlePasswordInputChange}
            />
          </div>
        ) : null}
        {emailInputValue.length &&
        passwordInputValue.length &&
        isRegistration ? (
          <div className={styles.inputWrapper}>
            <img
              src="/public/assets/images/auth-password-field_icon.svg"
              alt="auth-password"
              draggable="false"
            />
            <Input
              type="password"
              placeholder="Confirm password"
              className={[styles.input, registerMode].join(' ')}
              onChange={handleConfirmPasswordInputChange}
            />
          </div>
        ) : null}
        {confirmPasswordInputValue.length && isRegistration ? (
          <div className={styles.signinWrapper}>
            <Button size="large" className={styles.signin}>
              Register
            </Button>
          </div>
        ) : null}
        {!emailInputValue.length && !isRegistration ? (
          <>
            <div
              className={[styles.btnWrapper, loginMode, registerMode].join(' ')}
            >
              <button className={styles.btn}>
                <img
                  src="/public/assets/images/google_logo.svg"
                  alt="google-logo"
                  draggable="false"
                />
              </button>
              <button className={styles.btn}>
                <img
                  src="/public/assets/images/github_logo.svg"
                  alt="github-logo"
                  draggable="false"
                />
              </button>
            </div>
            <p className={[styles.signup, loginMode, registerMode].join(' ')}>
              or <span onClick={handleSignUp}>Sign-up</span>
            </p>
          </>
        ) : null}
        {passwordInputValue.length &&
        emailInputValue.length &&
        !isRegistration ? (
          <div className={styles.signinWrapper}>
            <Button size="large" className={styles.signin}>
              Login
            </Button>
          </div>
        ) : null}
      </Box>
    </div>
  );
};
