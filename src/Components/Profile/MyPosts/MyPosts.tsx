import React, { ChangeEvent } from 'react';
import { ProfilePageType } from '../../../Redux/State';
import s from './MyPosts.module.css';
import { Post, PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  addPost: () => void;
  UpdateNewPostText: (text: string | undefined) => void;
  posts: Array<PostPropsType>;
  newPostText: string;
};

export const MyPosts = (props: MyPostsPropsType) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} numberOfLike={p.numberOfLike} />
  ));

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.addPost();
    props.UpdateNewPostText('');
  };

  const onPostChange = () => {
    let text = newPostElement.current?.value;
    props.UpdateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
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
