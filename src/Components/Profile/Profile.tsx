import React from 'react';
import { UserType } from '../../Redux/users-reducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

let pr = {
  content: 'Profile_content__NsTjM',
  item: 'Profile_item__27LSv',
};

type ProfilePropsType = {
  profile: UserType | null;
  status: string;
  updateStatus: (status: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};
