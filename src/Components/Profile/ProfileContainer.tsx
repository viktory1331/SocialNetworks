import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from '../../Redux/profile-reducer';
import { RootStateReduxType } from '../../Redux/redux-store';
import { UserType } from '../../Redux/users-reducer';
import { Profile } from './Profile';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfileContainerPropsType = {
  status: string;
  profile: null | UserType;
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
};

class ProfileContainer extends React.Component<
  ProfileContainerPropsType & any
> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.isAuthId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        newPostText={this.props.newPostText}
      />
    );
  }
}

let mapStateToProps = (state: RootStateReduxType) => ({
  profile: state.profilePage.profile,
  authorizedId: state.auth.data.id,
  status: state.profilePage.status,
  isAuthId: state.auth.data.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
