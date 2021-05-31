import React from 'react';
import s from './Dialogs.module.css';
import {
  sendMessage,
  updateBodyOfNewMessage,
} from '../../Redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { RootStateReduxType } from '../../Redux/redux-store';
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
