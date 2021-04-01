import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

export const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg" />
      </div>
      <div>картинОчка</div>
      <MyPosts />
    </div>
  );
};
