import React from 'react'
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { ActionsTypes } from './redux-store';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState: InitialStateType = {
   isInitialize: false
}

export type InitialStateType = {
   isInitialize: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type) {
      case SET_INITIALIZED:
         return {
            ...state,
            isInitialize: true,
         }
      default:
         return state
   }
}

export const initializedSuccess = () => {
   return {
      type: SET_INITIALIZED
   } as const;
};

export const initializeApp = () => ((dispatch: ThunkDispatch<{}, {}, ActionsTypes>) => {
   let promise = dispatch(getAuthUserData());
   Promise.all([promise]).then(() => dispatch(initializedSuccess()))
})
