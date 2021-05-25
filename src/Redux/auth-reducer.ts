import React from 'react'
import { ActionsTypes } from './store';
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
      login: null | string,
      id: null | number,
      email: null | string
   },
   isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            data: { ...action.data },
            isAuth: true
         }
      default:
         return state
   }
}

export const setAuthUserData = (login: null | string, id: null | number, email: null | string,) => {
   return {
      type: SET_USER_DATA,
      data: { login, id, email }
   } as const;
};
