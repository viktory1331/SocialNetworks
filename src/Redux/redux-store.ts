import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { authReducer, setAuthUserData } from './auth-reducer';
import { dialogsReducer, sendMessage } from './dialogs-reducer';
import { addPost, profileReducer, setStatus, setUserProfile } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleFollowingProgress, toggleIsFetching, unfollow, usersReducer } from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { appReducer, initializedSuccess } from './app-reducer';

export type ActionsTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleFollowingProgress>
  | ReturnType<typeof initializedSuccess>



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateReduxType = ReturnType<typeof reducers>


export default store