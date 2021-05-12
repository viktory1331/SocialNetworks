import React from 'react';
import s from './Dialogs.module.css';
import { RootStateType } from '../../Redux/store';
import {
  sendMessage,
  updateBodyOfNewMessage,
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
      dispatch(updateBodyOfNewMessage(text));
    },
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessage(newMessageBody));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
