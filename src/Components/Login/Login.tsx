import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { ReduxLoginForm } from './LoginReduxForm';
import { Redirect } from 'react-router';
import { RootStateReduxType } from '../../Redux/redux-store';

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};


type PropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
};


const Login = (props: PropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: RootStateReduxType) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
