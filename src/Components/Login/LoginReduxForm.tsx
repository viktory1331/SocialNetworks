import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/Validators';
import { Input } from '../common/Preloader/FormsControls/FormsControls';
import style from '../common/Preloader/FormsControls/FormsControls.module.css';

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />
        remember me
      </div>
      {props.error && (
        <div className={style.errorFormSymmary}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);
