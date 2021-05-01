import React from 'react'
import { DialogsPageType, ActionsTypes } from './store';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
   messages: [
     { id: 1, message: 'Hi!' },
     { id: 2, message: 'Do u know IT-KAMASUTRA?' },
     { id: 3, message: 'Do u know Serebrynka-city?!' },
     { id: 4, message: 'Yo!' },
     { id: 5, message: 'Hi, Viktor' },
     { id: 6, message: 'Полетели!' },
   ],
   dialogs: [
     { id: 1, name: 'Victoriya' },
     { id: 2, name: 'Nikita' },
     { id: 3, name: 'Dima' },
     { id: 4, name: 'Alisa' },
     { id: 5, name: 'Nastya' },
     { id: 6, name: 'Luis' },
   ],
   newMessageBody: '',
}

export const dialogsReducer = (state: DialogsPageType=initialState, action: ActionsTypes) => {
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
