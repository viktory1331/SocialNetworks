import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
  message: string;
  numberOfLike: string;
};

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img src="https://go3.imgsmail.ru/imgpreview?key=1f34d978cbd8825&mb=storage&w=540" />
      {props.message}
      <div>
        <span>{props.numberOfLike}</span>
      </div>
    </div>
  );
};
