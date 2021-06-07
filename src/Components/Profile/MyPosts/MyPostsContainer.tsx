import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPost} from '../../../Redux/profile-reducer';
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
