import React from 'react';
import { addPostAC, updatePostTextAC } from '../../../Redux/profile-reducer';
import {
  ActionsTypes,
  ProfilePageType,
  RootStateType,
} from '../../../Redux/store';
import { MyPosts } from './MyPosts';

type MyPostsPropsType = {
  state: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};

export const MyPostsContainer = (props: MyPostsPropsType) => {
  const onAddPost = () => {
    props.dispatch(addPostAC(props.state.profilePage.newPostText));
  };

  const onPostChange = (text: string) => {
    props.dispatch(updatePostTextAC(text));
  };

  return (
    <MyPosts
      updatePostText={onPostChange}
      addPost={onAddPost}
      posts={props.state.profilePage.posts}
      newPostText={props.state.profilePage.newPostText}
    />
  );
};
