import React from 'react';
import { UserType } from '../../../Redux/users-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
  profile: null | UserType;
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus myFullName={'Fedosowa Victoria'} status={'IT-girl?!'} />
      </div>
    </div>
  );
};
