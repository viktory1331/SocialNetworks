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
  addPost: () => void;
  UpdateNewPostText: (newText: string | undefined) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        UpdateNewPostText={props.UpdateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};
