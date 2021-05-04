import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import { Post, PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  updatePostText: (text: string) => void;
  addPost: (newPostText: string) => void;
  posts: Array<PostPropsType>;
  newPostText: string;
};

export const MyPosts = (props: MyPostsPropsType) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} numberOfLike={p.numberOfLike} />
  ));

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => {
    props.addPost(props.newPostText);
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.updatePostText(text);
    }
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button
            onClick={() => {
              onAddPost();
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
