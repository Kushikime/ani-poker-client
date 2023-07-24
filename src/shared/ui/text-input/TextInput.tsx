import React, { InputHTMLAttributes, useEffect } from 'react';

import styles from './TextInput.module.less';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

export type FormTextFieldProps<TFieldValues extends FieldValues, TName> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  name: TName;
  control: Control<TFieldValues>;
  image?: string;
  type?: 'text' | 'password';
  size?: 'small' | 'medium' | 'large';
};

export const TextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTextFieldProps<TFieldValues, TName>
) => {
  const {
    className,
    title,
    image,
    control,
    name,
    type = 'text',
    size = 'medium',
    ...textInputProps
  } = props;

  const controller = useController({ name, control });
  const { error } = controller.fieldState;

  const value =
    typeof controller?.field?.value === 'number'
      ? String(controller.field.value)
      : controller?.field?.value || '';

  const classNames = React.useMemo(
    () => [styles.textInput, className, styles[size]].join(' '),
    [className]
  );

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {image && (
          <div className={styles.imageContainer}>
            <img src={image} />
          </div>
        )}
        <input
          {...controller.field}
          {...textInputProps}
          type={type}
          placeholder={title}
          className={classNames}
          value={value}
        />
      </div>
      {/* For errors */}
      <div></div>
      {/* For Info */}
      <div></div>
    </div>
  );
};
