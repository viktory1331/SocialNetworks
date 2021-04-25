import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
  id: number;
  message: string;
};

export const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>;
};
