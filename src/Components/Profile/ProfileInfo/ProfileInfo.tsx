import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg" />
      </div>
      <div className={s.descriptionBlock}>картинОчка</div>
    </div>
  );
};
