import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItam';
import { Message } from './Message/Message';

export const Dialogs = (props: any) => {
  let dialogsElement = props.state.dialogs.map((d: any) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.state.messages.map((m: any) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
