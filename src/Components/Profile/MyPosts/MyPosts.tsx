import React from 'react';
import { ProfilePageType } from '../../../Redux/State';
import s from './MyPosts.module.css';
import { Post, PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  profilePage: ProfilePageType;
  addPost: () => void;
};

export const MyPosts = (props: ProfilePageType) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} numberOfLike={p.numberOfLike} />
  ));

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    alert(newPostElement.current?.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              addPost();
            }}
          >
            Add Post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
