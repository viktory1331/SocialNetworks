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
  let dialogs = [
    { id: 1, name: 'Victoriya' },
    { id: 2, name: 'Nikita' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Alisa' },
    { id: 5, name: 'Nastya' },
    { id: 6, name: 'Luis' },
  ];

  let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Do u know IT-KAMASUTRA?' },
    { id: 3, message: 'Do u know Serebrynka-city?!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Hi, Viktor' },
    { id: 6, message: 'Полетели!' },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
