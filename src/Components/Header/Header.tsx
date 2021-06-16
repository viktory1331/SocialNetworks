import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean;
  login: null | string;
  logout: () => void;
};


export const Header = (props: HeaderPropsType) => {
  debugger;
  return (
    <header className={s.header}>
      <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
