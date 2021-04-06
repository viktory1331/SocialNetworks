import React from 'react';

export type MessagePropsType = {
  message: String;
  id: number;
};
export type DialogsPropsType = {
  id: number;
  name: string;
};
export type PostPropsType = {
  id: number;
  message: String;
  numberOfLike: string;
};
export type ProfilePageType = {
  posts: Array<PostPropsType>;
};
export type DialogsPageType = {
  dialogs: Array<DialogsPropsType>;
  messages: Array<MessagePropsType>;
};
type SidebarType = {};
type RootStateType = {
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

export default state;
