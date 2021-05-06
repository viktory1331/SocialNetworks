import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import {
  followAC,
  InitialStateType,
  setUsersAC,
  unfollowAC,
  UserType,
} from '../../Redux/users-reducer';
import { Users } from './Users';

type MapStatePropsType = {
  usersPage: InitialStateType;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUser: (users: Array<UserType>) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUser: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
