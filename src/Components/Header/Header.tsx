import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean;
  login: null | string;
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
