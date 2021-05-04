import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogsPropsType } from '../../../Redux/store';
import s from './../Dialogs.module.css';

export type DilalogItemPropsType = {
  dialogsPage: DialogsPropsType;
};

export const DialogItem = (props: DialogsPropsType) => {
  let path = '/dialogs/1' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
