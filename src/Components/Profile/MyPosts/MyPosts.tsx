import React from 'react';
import { ProfilePageType } from '../../../Redux/State';
import s from './MyPosts.module.css';
import { Post, PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  profilePage: ProfilePageType;
};

export const MyPosts = (props: ProfilePageType) => {
  let postsElement = props.posts.map((p: any) => (
    <Post message={p.message} numberOfLike={p.numberOfLike} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
