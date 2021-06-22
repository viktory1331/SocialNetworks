import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { RootStateReduxType } from '../../Redux/redux-store';
import { logout } from '../../Redux/auth-reducer';

type UsersContainerPropsType = {
  login: null | string;
  isAuth: boolean;
  logout: () => void;
};

class HeaderContainer extends React.Component<UsersContainerPropsType> {
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

export default connect(mapStateToProps, { logout })(HeaderContainer);
