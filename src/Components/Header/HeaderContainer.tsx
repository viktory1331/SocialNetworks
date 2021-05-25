import axios from 'axios';
import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { UserType } from '../../Redux/users-reducer';
import { authAPI } from '../../api/Api';

type UsersContainerPropsType = {
  setAuthUserData: (
    login: null | string,
    id: null | number,
    email: null | string
  ) => void;
  login: null | string;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
          let { login, id, email } = response.data.data;
          debugger;
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
