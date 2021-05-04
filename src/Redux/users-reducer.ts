import React from 'react'
import { PostPropsType, ActionsTypes, ProfilePageType } from './store';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserLocationType = {
   city: string,
   country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: {
      small: string | undefined,
      large: string | undefined,
    },
    location: UserLocationType
}

const initialState: InitialStateType = { 
   users: []
}

export type InitialStateType = {
   users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action:ActionsTypes): InitialStateType => {
   switch(action.type ) {
      case FOLLOW: 
         return {...state, users: state.users.map(u => {
               if(u.id === action.userId){
                  return {...u, followed: true}
               }
               return u
            })
         }
      case UNFOLLOW:
         return {...state, users: state.users.map(u => {
            if(u.id === action.userId){
               return {...u, followed: false}
            }
            return u
         })
      }
      case SET_USERS: {
         return {...state, users: [...state.users, ...action.users]}
      }
      default:
         return state
      }
   }

   export const followAC = (userId:number) => {
      return {
        type: 'FOLLOW',
        userId
      } as const;
    };
   export const unfollowAC = (userId:number) => {
      return {
        type: 'UNFOLLOW',
        userId
      } as const;
    };
   export const setUsersAC = (users: Array<UserType>) => {
      return {
        type: 'SET_USERS',
        users
      } as const;
    };