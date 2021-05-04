import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import {
  ActionsTypes,
  DialogsPageType,
  RootStateType,
} from '../../Redux/store';

type PropsType = {
  dialogsPage: DialogsPageType;
  updateBodyOfNewMessage: (text: string) => void;
  sendMessage: (newMessageBody: string) => void;
};

export const Dialogs = (props: PropsType) => {
  let state = props.dialogsPage;

  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage(props.dialogsPage.newMessageBody);
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateBodyOfNewMessage(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={props.dialogsPage.newMessageBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
