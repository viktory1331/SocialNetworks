import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props: any) => {
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
