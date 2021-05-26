import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
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
  getUserProfile: (userId: number) => void;
};

class ProfileContainer extends React.Component<
  ProfileContainerPropsType & any
> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {

    if (this.props.isAuth === false) return <Redirect to={"/login"} />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateReduxType) => ({
  profile: state.profilePage.profile,
  iaAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
