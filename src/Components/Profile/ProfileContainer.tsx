import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile } from '../../Redux/profile-reducer';
import { RootStateReduxType } from '../../Redux/redux-store';
import { UserType } from '../../Redux/users-reducer';
import { Profile } from './Profile';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfileContainerPropsType = {
  profile: null | UserType;
  authorizedId: null | number;
  getUserProfile: (userId: number) => void;
};

class ProfileContainer extends React.Component<
  ProfileContainerPropsType & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    debugger;
    let userId = Number(this.props.match.params.userId);
    if (!userId && this.props.authorizedId) {
      userId = this.props.authorizedId;
      this.props.getUserProfile(userId);
    }
  }

  componentDidUpdate(
    prevProps: ProfileContainerPropsType &
      RouteComponentProps<{ userId: string }>
  ) {
    if (
      prevProps.authorizedId !== this.props.authorizedId &&
      this.props.authorizedId
    ) {
      this.props.getUserProfile(this.props.authorizedId);
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateReduxType) => ({
  profile: state.profilePage.profile,
  authorizedId: state.auth.data.id,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
)(ProfileContainer);
