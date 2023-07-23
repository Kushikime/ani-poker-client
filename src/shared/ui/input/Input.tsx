import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  return <input {...props} />;
};
