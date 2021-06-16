import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import { getAuthUserData, logout } from '../../Redux/auth-reducer';

type UsersContainerPropsType = {
  login: null | string;
  isAuth: boolean;
  getAuthUserData: () => void;
  logout: () => void;
};

class HeaderContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <>
        <Header
          {...this.props}
          isAuth={this.props.isAuth}
          login={this.props.login}
          logout={this.props.logout}
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

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
