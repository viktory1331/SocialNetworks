import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    if (action.type === ADD_POST) {
      const newPost: PostPropsType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        numberOfLike: '0',
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateBodyOfNewMessageAC>;

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewTextActionType = ReturnType<typeof updatePostTextAC>;
type sendMessageCreator = ReturnType<typeof sendMessageAC>;
type updateBodyOfNewMessageCreator = ReturnType<
  typeof updateBodyOfNewMessageAC
>;

export const addPostAC = (newPostText: string) => {
  return {
    type: 'ADD-POST',
    newPostText: newPostText,
  } as const;
};
export const updatePostTextAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText,
  } as const;
};
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
type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export default store;
