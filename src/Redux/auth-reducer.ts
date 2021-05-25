import React from 'react'
import { Dispatch } from 'redux';
import { authAPI } from '../api/Api';
import { ActionsTypes } from './store';
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
export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
   authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { login, id, email } = response.data.data;
        dispatch(setAuthUserData(login, id, email));
      }
    });
}
