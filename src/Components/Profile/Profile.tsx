import React from 'react';
import { isPropertySignature } from 'typescript';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

export const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};
