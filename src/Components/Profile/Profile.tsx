import React from 'react';
import { isPropertySignature } from 'typescript';
import { ProfilePageType } from '../../Redux/State';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfilePropsType = {
  profilePage: ProfilePageType;
  addPost: (postText: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} />
    </div>
  );
};
