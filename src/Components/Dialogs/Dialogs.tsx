import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props: any) => {
  let path = '/dialogs/1' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: any) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Victoriya" id="1" />
        <DialogItem name="Nikita" id="2" />
        <DialogItem name="Dima" id="3" />
        <DialogItem name="Alisa" id="4" />
        <DialogItem name="Nastya" id="5" />
        <DialogItem name="Luis" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="Do u know IT-KAMASUTRA?" />
        <Message message="Do u know Serebrynka-city?!" />
      </div>
    </div>
  );
};
