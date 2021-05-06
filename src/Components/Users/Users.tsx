import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import { UsersPropsType } from './UsersContainer';
import userPhoto from '../../assets/Images/user.png';
import { InitialStateType, UserType } from '../../Redux/users-reducer';
import { RootStateType } from '../../Redux/store';

type usersPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  usersPage: InitialStateType;
  setUser: (users: Array<UserType>) => void;
};

export class Users extends React.Component<usersPropsType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0//users')
      .then((response) => {
        this.props.setUser(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.usersPage.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
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
  }
}
