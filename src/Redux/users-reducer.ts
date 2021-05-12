import React from 'react'
import { PostPropsType, ActionsTypes, ProfilePageType } from './store';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false
}

export type InitialStateType = {
   users: Array<UserType>,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   isFetching: boolean
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
         return {...state, users: action.users}
      }
      case SET_CURRENT_PAGE: {
         return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
         return {...state, totalUsersCount: action.totalUsersCount}
      }
      case TOGGLE_IS_FETCHING: {
         return {...state, isFetching: action.isFetching}
      }
      default:
         return state
      }
   }

   export const follow = (userId:number) => {
      return {
        type: 'FOLLOW',
        userId
      } as const;
    };
   export const unfollow = (userId:number) => {
      return {
        type: 'UNFOLLOW',
        userId
      } as const;
    };
   export const setUsers = (users: Array<UserType>) => {
      return {
        type: 'SET_USERS',
        users
      } as const;
    };
    export const setCurrentPage = (currentPage: number) => {
       return {
          type: 'SET_CURRENT_PAGE',
          currentPage
       } as const
    }
    export const setUsersTotalCount = (totalUsersCount: number) => {
       return {
          type: 'SET_TOTAL_USERS_COUNT',
          totalUsersCount
       } as const
    }
    export const toggleIsFetching = (isFetching: boolean) => {
      return {
         type: 'TOGGLE_IS_FETCHING',
         isFetching
      } as const
   }