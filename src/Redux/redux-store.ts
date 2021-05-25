import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
   profilePage:profileReducer,
   dialogsPage:dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateReduxType = ReturnType <typeof reducers>


export default store