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
import { RootStateReduxType } from '../../Redux/redux-store';



let mapStateToProps = (state: RootStateReduxType ) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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
