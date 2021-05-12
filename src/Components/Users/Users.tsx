import React from 'react';
import { InitialStateType, UserType } from '../../Redux/users-reducer';
import userPhoto from '../../assets/Images/user.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  usersPage: InitialStateType;
  setUsers: (users: Array<UserType>) => void;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  onPageChanged: (currentPage: number) => void;
  isFetching: boolean;
  toggleIsFetching: (isFetching: boolean) => void;
};

export let Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
