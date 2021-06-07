import React from 'react'
import { DialogsPageType, ActionsTypes } from './store';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
   ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody;
         return { ...state, messages: [...state.messages, { id: 6, message: body }] }
      default:
         return state
   }
}

export const sendMessage = (newMessageBody: string) => {
   return {
      type: SEND_MESSAGE,
      newMessageBody: newMessageBody,
   } as const;
};
