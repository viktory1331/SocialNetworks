import React from 'react';
import {
  InitialStateType,
} from '../../Redux/users-reducer';
import userPhoto from '../../assets/Images/user.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  usersPage: InitialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  onPageChanged: (currentPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  isFetching: boolean;
  followingInProgress: Array<number>;
  unfollowThunk: (id: number) => void;
  followThunk: (id: number) => void;
};

export let Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(props);
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? s.selectedPage : ''}
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.usersPage.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
