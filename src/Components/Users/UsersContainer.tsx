import React from 'react';
import { connect } from 'react-redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import {
  followThunk,
  getUsers,
  InitialStateType,
  setCurrentPage,
  unfollowThunk,
} from '../../Redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type MapStatePropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  unfollowThunk: (id: number) => void;
  followThunk: (id: number) => void;
  setCurrentPage: (currentPage: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage: number) => {
    this.props.getUsers(currentPage, this.props.pageSize);
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
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          usersPage={this.props.usersPage}
          isFetching={this.props.isFetching}
          setCurrentPage={this.props.setCurrentPage}
          followingInProgress={this.props.followingInProgress}
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

export default withAuthRedirect(
  connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    setCurrentPage,
    getUsers,
  })(UsersContainer)
);
