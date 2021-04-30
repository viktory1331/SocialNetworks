import React from 'react';
import { isPropertySignature } from 'typescript';
import { ActionsTypes, ProfilePageType } from '../../Redux/store';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
