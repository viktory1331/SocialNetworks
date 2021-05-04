import React from 'react';
import s from './Dialogs.module.css';
import { RootStateType } from '../../Redux/store';
import {
  sendMessageAC,
  updateBodyOfNewMessageAC,
} from '../../Redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateBodyOfNewMessage: (text: string) => {
      dispatch(updateBodyOfNewMessageAC(text));
    },
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
