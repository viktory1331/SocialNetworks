import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

export type DialogsPropsType = {
  id: number;
  name: string;
};



export const DialogItem = (props: DialogsPropsType) => {
  let path = '/dialogs/1' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
