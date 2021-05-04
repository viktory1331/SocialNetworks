import React from 'react';
import s from './Users.module.css';
import { UsersPropsType } from './UsersContainer';

export const Users = (props: UsersPropsType ) => {
  if (props.usersPage.users.length === 0) {
    props.setUser([
      {
        id: 1,
        followed: false,
        fullName: 'Kirill',
        status: 'Front-end developer',
        location: { city: 'Minsk', country: 'Belarus' },
        photoUrl:
          'https://sun9-30.userapi.com/impf/c841223/v841223762/16745/FYbCjU8rBx4.jpg?size=2560x1593&quality=96&sign=2db9370bfbb8297f17c313973c104499&type=album',
      },
      {
        id: 2,
        followed: true,
        fullName: 'Elizaveta',
        status: 'Designer',
        location: { city: 'Minsk', country: 'Belarus' },
        photoUrl:
          'https://sun9-67.userapi.com/impg/3KZgs7OLkdU8awYwzddhyjS6iCT6NJ1_fTJ9bA/6FKnMDeAizc.jpg?size=1440x1920&quality=96&sign=abb058c740a84589affcca7bf33adf19&type=album',
      },
      {
        id: 3,
        followed: false,
        fullName: 'Denis',
        status: 'Paramedic',
        location: { city: 'Kopyl', country: 'Belarus' },
        photoUrl:
          'https://sun9-43.userapi.com/impg/6xZ6mW6ItyQetuT9GLqKHNNAXBz4ACj7Ra0U9Q/crDQGmce5ts.jpg?size=480x600&quality=96&sign=f48bc57ed911519ccd223681879609d0&type=album',
      },
    ]);
  }

  return (
    <div>
      {props.usersPage.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
