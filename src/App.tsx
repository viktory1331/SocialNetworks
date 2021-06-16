import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
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

function App() {
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

export default App;
