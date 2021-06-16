import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/Validators';
import { Input } from '../common/Preloader/FormsControls/FormsControls';

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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);
