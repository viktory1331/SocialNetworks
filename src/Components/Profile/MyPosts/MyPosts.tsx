import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi" numberOfLike="2 likes" />
        <Post message="I am cat" numberOfLike="5 likes" />
      </div>
    </div>
  );
};
