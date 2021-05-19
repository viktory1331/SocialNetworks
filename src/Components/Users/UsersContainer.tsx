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
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
  UserType,
} from '../../Redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/Api';


type MapStatePropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array <number>;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setUsersTotalCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingProgress: (isFetching: boolean, userId: number) => boolean;
};

// type UsersContainerPropsType = {
//   follow: (userId: number) => void;
//   unfollow: (userId: number) => void;
//   usersPage: InitialStateType;
//   setUsers: (users: Array<UserType>) => void;
//   pageSize: number;
//   totalUsersCount: number;
//   currentPage: number;
//   setCurrentPage: (currentPage: number) => void;
//   setUsersTotalCount: (totalUsersCount: number) => void;
//   isFetching: boolean;
//   toggleIsFetching: (isFetching: boolean) => void;
//   followingInProgress: Array <number>
//   toggleFollowingProgress: (isFetching: boolean, userId: number) => boolean;
// };

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UserContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onPageChanged = (currentPage: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}//
          pageSize={this.props.pageSize}//
          currentPage={this.props.currentPage}//
          onPageChanged={this.onPageChanged}
          setUsers={this.props.setUsers}//
          follow={this.props.follow}//
          unfollow={this.props.unfollow}//
          usersPage={this.props.usersPage}//
          isFetching={this.props.isFetching}//
          setCurrentPage={this.props.setCurrentPage}
          toggleIsFetching={this.props.toggleIsFetching}
          followingInProgress={this.props.followingInProgress}//
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UserContainer);
