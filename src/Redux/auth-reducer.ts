import React from 'react'
import {ActionsTypes} from './store';
import { UserType } from './users-reducer';
const SET_USER_DATA = 'SET_USER_DATA';

const initialState: InitialStateType = { 
   data: {
      login: null,
      id: null,
      email: null
   },
   isAuth: false
}

export type InitialStateType = {
   data: {
      login:null | UserType,
      id: null | UserType,
      email: null | UserType
   }
   isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action:ActionsTypes): InitialStateType => {
   switch(action.type ) {
      case SET_USER_DATA: 
         return {...state, 
            ...action.data,
            isAuth: true
         }
      default:
         return state
      }
   }

   export const setAuthUserData = (login: null | UserType, id:null | UserType, email: null |UserType, ) => {
      return {
        type: SET_USER_DATA,
        data: { login, id, email}
      } as const;
    };
