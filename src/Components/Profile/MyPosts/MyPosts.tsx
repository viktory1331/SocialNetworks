import React, { ChangeEvent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import { Post, PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  addPost: (newPostText: string) => void;
  posts: Array<PostPropsType>;
  newPostText: string;
};

type FormDataType = {
  newPostText: string;
};

export const MyPosts = (props: MyPostsPropsType) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} numberOfLike={p.numberOfLike} />
  ));

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = (values: { newPostText: string }) => {
    debugger;
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'newPostText'}
          component={'textarea'}
          placeholder={'Add new post '}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm<FormDataType>({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm);
