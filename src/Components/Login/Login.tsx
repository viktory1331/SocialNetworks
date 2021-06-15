import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/Validators';
import { Input } from '../common/Preloader/FormsControls/FormsControls';

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} validate={[required]} component={Input} />
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

const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};
