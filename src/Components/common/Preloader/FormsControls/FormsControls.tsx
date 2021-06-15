import React, { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styles from './FormsControls.module.css';


const FormControl: FC<WrappedFieldProps> = ({
  input = { name: 'newPostText' },
  meta = { touched: false, error: 'Field is required' },
  children,
  ...props
}) => {
  const isError = meta.touched && meta.error;
  debugger;
  return (
    <div className={styles.formControl + ' ' + (isError ? styles.error : '')}>
      <div>{children}</div>
      {isError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
  const {input} = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...props}  />
    </FormControl>
  );
};

export const Input: FC<WrappedFieldProps> = (props) => {
  const {input} = props 
  return (
    <FormControl {...props}>
      <input {...input} {...props} />
    </FormControl>
  );
};
