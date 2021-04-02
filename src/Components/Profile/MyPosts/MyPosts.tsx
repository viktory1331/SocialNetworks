import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi', numberOfLike: '2 likes' },
    { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
    { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
  ];

  let postsElement = posts.map((p) => (
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
