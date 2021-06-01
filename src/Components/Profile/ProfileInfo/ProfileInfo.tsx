import React from 'react';
import { UserType } from '../../../Redux/users-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
  profile: null | UserType;
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus
          someFullName={'Some name'}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};
