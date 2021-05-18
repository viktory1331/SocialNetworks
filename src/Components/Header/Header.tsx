import React from 'react';
import { NavLink } from 'react-router-dom';
import { InitialStateType } from '../../Redux/auth-reducer';
import s from './Header.module.css';
import { UserType } from '../../Redux/users-reducer';

type HeaderPropsType = {
  isAuth: boolean,
  login: null | string
  setAuthUserData: (
    login: null | string,
    id: null | number,
    email: null | string
  ) => void;
};

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
