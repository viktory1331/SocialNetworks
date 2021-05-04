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

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
