import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItam';
import { Message } from './Message/Message';
import { DialogsPageType } from '../../Redux/State';

type PropsType = {
  dialogsPage: DialogsPageType;
};
export const Dialogs = (props: PropsType) => {
  debugger;
  let dialogsElement = props.dialogsPage.dialogs.map((d: any) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((m: any) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
