import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  DialogsPropsType,
  MessagePropsType,
} from '../../../Redux/dialogs-reducer';
import { addPost, ProfilePageType } from '../../../Redux/profile-reducer';
import { ActionsTypes } from '../../../Redux/redux-store';
import { MyPosts } from './MyPosts';
import { PostPropsType } from './Post/Post';

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export type DialogsPageType = {
  dialogs: Array<DialogsPropsType>;
  messages: Array<MessagePropsType>;
};
export type SidebarType = {};

type MyPostsPropsType = {
  state: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};
type mapStatePropsType = {
  posts: Array<PostPropsType>;
};

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPost(newPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
