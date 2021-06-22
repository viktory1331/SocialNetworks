import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import { Preloader } from './Components/common/Preloader/Preloader';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Header } from './Components/Header/Header';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { Music } from './Components/Music/Music';
import { Navbar } from './Components/Navbar/Navbar';
import { News } from './Components/News/News';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Settings } from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import { initializeApp } from './Redux/app-reducer';
import { getAuthUserData } from './Redux/auth-reducer';
import { RootStateReduxType } from './Redux/redux-store';

type AppPropsType = {
  isInitialize: Boolean;
  initializeApp: () => void;
};

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialize) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: RootStateReduxType) => {
  return {
    isInitialize: state.app.isInitialize,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
