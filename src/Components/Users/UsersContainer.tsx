import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import axios from 'axios';
import { RootStateReduxType } from '../../Redux/redux-store';
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  unfollowAC,
  UserType,
} from '../../Redux/users-reducer';
import { Users } from './Users';

type MapStatePropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUser: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCounter: (totalUsersCount: number) => void;
};

type UsersContainerPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  usersPage: InitialStateType;
  setUser: (users: Array<UserType>) => void;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCounter: (totalUsersCount: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UserContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUser(response.data.items);
        this.props.setTotalUsersCounter(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage: number) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUser(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        setUser={this.props.setUser}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        usersPage={this.props.usersPage}
      />
    );
  }
}

let mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCounter: (totalUsersCount: number) => {
      dispatch(setUsersTotalCountAC(totalUsersCount));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
