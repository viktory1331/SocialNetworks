
import React from 'react';
import { ActionsTypes } from './redux-store';

let initialState = {}

type SidebarType = {};

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
   return state
}