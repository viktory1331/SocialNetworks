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
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state: RootStateReduxType) => {
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
