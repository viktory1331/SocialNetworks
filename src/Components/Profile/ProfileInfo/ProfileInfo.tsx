import React from 'react';
import { InitialStateType, UserType } from '../../../Redux/users-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  profile: null | UserType;
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        картинОчка
      </div>
    </div>
  );
};
