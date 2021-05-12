import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer';
import { RootStateReduxType } from '../../Redux/redux-store';
import { InitialStateType, UserType } from '../../Redux/users-reducer';
import { Profile } from './Profile';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfileContainerPropsType = {
  profile: null | UserType;
  setUserProfile: (profile: null | UserType) => void;
};

export class ProfileContainer extends React.Component<
  ProfileContainerPropsType & any
> {
  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${'2'}`)
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfile(response.data);
      })
      .catch((e) => console.log(e));
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateReduxType) => {
  return {
    profile: state.profilePage.profile,
  };
};

connect(mapStateToProps, { setUserProfile })(ProfileContainer);
