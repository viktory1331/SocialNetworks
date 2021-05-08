import React from 'react';
import {
  dialogsReducer,
  sendMessageAC,
  updateBodyOfNewMessageAC,
} from './dialogs-reducer';
import { addPostAC, profileReducer, updatePostTextAC } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { followAC, setCurrentPageAC, toggleIsFetchingAC, setUsersAC, setUsersTotalCountAC, unfollowAC, usersReducer } from './users-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', numberOfLike: '2 likes' },
        { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
        { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
      ],
      newPostText: 'It-kamasutra',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber(state: RootStateType) {
    console.log('stage changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  },
  dispatch(action: ActionsTypes) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
  },
};

export type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateBodyOfNewMessageAC>
  | ReturnType <typeof followAC>
  | ReturnType <typeof unfollowAC>
  | ReturnType <typeof setUsersAC>
  | ReturnType <typeof setCurrentPageAC>
  | ReturnType <typeof setUsersTotalCountAC>
  | ReturnType <typeof toggleIsFetchingAC>

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewTextActionType = ReturnType<typeof updatePostTextAC>;
type sendMessageCreator = ReturnType<typeof sendMessageAC>;
type updateBodyOfNewMessageCreator = ReturnType<
  typeof updateBodyOfNewMessageAC
>;

export type MessagePropsType = {
  message: string;
  id: number;
};
export type DialogsPropsType = {
  id: number;
  name: string;
};
export type PostPropsType = {
  id: number;
  message: string;
  numberOfLike: string;
};
export type ProfilePageType = {
  posts: Array<PostPropsType>;
  newPostText: string;
};
export type DialogsPageType = {
  dialogs: Array<DialogsPropsType>;
  messages: Array<MessagePropsType>;
  newMessageBody: string;
};
export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export default store;
