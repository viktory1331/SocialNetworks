import React from 'react';

type messagePropsType = {
  id: number;
  message: String;
};
type dialogsPropsType = {
  id: number;
  name: String;
};
type postPropsType = {
  id: number;
  message: String;
  numberOfLike: string;
};
type profilePageType = {
  posts: Array<postPropsType>;
};
type dialogsPageType = {
  dialogs: Array<dialogsPropsType>;
  messages: Array<messagePropsType>;
};
type sidebarType = {};
type rootStateType = {
  profilePage: profilePageType;
  dialogsPage: dialogsPageType;
  sidebar: sidebarType;
};

let state: rootStateType = {
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
