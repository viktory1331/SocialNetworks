import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootStateReduxType } from '../Redux/redux-store';

type MapStatePropsType = {
  isAuth: boolean;
};

let mapStateToProps = (state: RootStateReduxType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: MapStatePropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'} />;
    return <Component {...props} />;
  };

  let ConnectedAuthRedirectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};
