import React from 'react'
import { DialogsPageType, ActionsTypes } from './State';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
   switch(action.type){
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({ id: 6, message: body });
         return state;
      default:
         return state
   }
}

export const sendMessageAC = (newMessageBody: string) => {
   return {
     type: SEND_MESSAGE,
     newMessageBody: newMessageBody,
   } as const;
 };
export const updateBodyOfNewMessageAC = (body: string) => {
   return {
     type: UPDATE_NEW_MESSAGE_BODY,
     body: body,
   } as const;
 };
