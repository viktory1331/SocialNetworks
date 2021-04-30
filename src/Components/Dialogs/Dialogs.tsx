import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItam';
import { Message } from './Message/Message';
import {
  ActionsTypes,
  DialogsPageType,
  RootStateType,
} from '../../Redux/store';
import {
  sendMessageAC,
  updateBodyOfNewMessageAC,
} from '../../Redux/dialogs-reducer';

type PropsType = {
  dialogsPage: DialogsPageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Dialogs = (props: PropsType) => {
  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  // let newMessageBody = state.newMessageBody;
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageAC(props.dialogsPage.newMessageBody));
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // let body = e.target.value;
    props.dispatch(updateBodyOfNewMessageAC(e.target.value));
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
              value={newMessageBody}
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
