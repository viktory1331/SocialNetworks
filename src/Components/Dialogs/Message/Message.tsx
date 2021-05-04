import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
  id: number;
  message: string;
};

export const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>
      <img src="https://ae01.alicdn.com/kf/Hc65aecefef3f40589c1adcbedf8f65e92/Hot-Sale-Hand-Knitted-Pet-Hats-Frog-Cat-Hat-For-Cat-Hat-Hairband-Cat-Cap-Green.jpg_q50.jpg" />
      {props.message}
    </div>
  );
};
