import axios from 'axios';
import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { UserType } from '../../Redux/users-reducer';

type UsersContainerPropsType = {
  setAuthUserData: (
    login: null | UserType,
    id: null | UserType,
    email: null | UserType
  ) => void;
  login: null | UserType;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { login, id, email } = response.data.data;
          this.props.setAuthUserData(login, id, email);
        }
      });
  }

  render() {
    return (
      <>
        <Header
          {...this.props}
          isAuth={this.props.isAuth}
          login={this.props.login}
          setAuthUserData={this.props.setAuthUserData}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootStateReduxType) => {
  return {
    login: state.auth.data.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
