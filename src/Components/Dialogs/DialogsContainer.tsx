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
import { Dialogs } from './Dialogs';

type PropsType = {
  state: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};

export const DialogsContainer = (props: PropsType) => {
 
  let onSendMessageClick = () => {
    props.dispatch(sendMessageAC(props.state.dialogsPage.newMessageBody));
  };

  let onNewMessageChange = (text: string)=> {
    props.dispatch(updateBodyOfNewMessageAC(text));
  };

  return (
    <Dialogs
      updateBodyOfNewMessage={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={props.state.dialogsPage}
    />
  );
};
