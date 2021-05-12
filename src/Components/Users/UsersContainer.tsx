import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import axios from 'axios';
import { RootStateReduxType } from '../../Redux/redux-store';
import {
  follow,
  InitialStateType,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
  unfollow,
  UserType,
} from '../../Redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

type MapStatePropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setUsersTotalCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

type UsersContainerPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  usersPage: InitialStateType;
  setUsers: (users: Array<UserType>) => void;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setUsersTotalCount: (totalUsersCount: number) => void;
  isFetching: boolean;
  toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UserContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          setUsers={this.props.setUsers}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          usersPage={this.props.usersPage}
          isFetching={this.props.isFetching}
          toggleIsFetching={this.props.toggleIsFetching}
        />
      </>
    );
  }
}

let mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
})(UserContainer);
