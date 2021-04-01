import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

export const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Victoriya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2"> Nikita</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Alisa</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Nastya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Luis</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>Do u know IT-KAMASUTRA?</div>
        <div className={s.message}>Do u know Serebrynka-city?</div>
      </div>
    </div>
  );
};
