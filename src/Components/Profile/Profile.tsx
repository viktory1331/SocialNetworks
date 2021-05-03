import React from 'react';
import { isPropertySignature } from 'typescript';
import {
  ActionsTypes,
  ProfilePageType,
  RootStateType,
} from '../../Redux/store';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfilePropsType = {
  state: RootStateType;
  //profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer state={props.state} dispatch={props.dispatch} />
    </div>
  );
};
