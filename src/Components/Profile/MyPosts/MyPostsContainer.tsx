import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPost, updatePostText } from '../../../Redux/profile-reducer';
import {
  ActionsTypes,
  RootStateType,
} from '../../../Redux/store';
import { MyPosts } from './MyPosts';
import { PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  state: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};
type mapStatePropsType = {
  posts: Array<PostPropsType>;
  newPostText: string;
};

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updatePostText: (text: string) => {
      dispatch(updatePostText(text));
    },
    addPost: (newPostText: string) => {
      dispatch(addPost(newPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
