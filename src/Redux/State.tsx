import React from 'react';
import { rerenderEntireTree } from '../render';

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
};
type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

let state: RootStateType = {
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
  },
  sidebar: {},
};

export const addPost = () => {
  const newPost: PostPropsType = {
    id: new Date().getTime(),
    message: state.profilePage.newPostText,
    numberOfLike: '0',
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const UpdateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
