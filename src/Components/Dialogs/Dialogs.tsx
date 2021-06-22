import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { Redirect } from 'react-router';
import { AddMessageFormRedux } from './AddMessageForm';
import { DialogsPageType } from '../../Redux/dialogs-reducer';



type PropsType = {
  dialogsPage: DialogsPageType;
  sendMessage: (newMessageBody: string) => void;
  isAuth: boolean;
};

export const Dialogs = (props: PropsType) => {
  let state = props.dialogsPage;

  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let addNewMessage = (values: { newMessageBody: string }) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

