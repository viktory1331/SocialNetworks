import React from 'react'
import { followAPI, usersAPI } from '../api/Api';
import { Dispatch } from 'redux';
import { ActionsTypes } from './store';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
   location: UserLocationType,
   email: string,
   login: string
}

const initialState: InitialStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: []
}

export type InitialStateType = {
   users: Array<UserType>,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   isFetching: boolean,
   followingInProgress: Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state, users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      case UNFOLLOW:
         return {
            ...state, users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
      case SET_USERS: {
         return { ...state, users: action.users }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalUsersCount: action.totalUsersCount }
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }
      }
      default:
         return state
   }
}

export const follow = (userId: number) => {
   return {
      type: 'FOLLOW',
      userId
   } as const;
};
export const unfollow = (userId: number) => {
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
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
   return {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching, userId
   } as const
}



export const getUsers = (currentPage: number, pageSize: number) => {
   return (dispatch: Dispatch<ActionsTypes>) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize)
         .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage))
         });
   }
}

export const followThunk = (id: number) => {
   return (dispatch: Dispatch<ActionsTypes>) => {
      dispatch(toggleFollowingProgress(true, id));
      followAPI.setFollow(id, true)
         .then((data) => {
            console.log(data);
            if (data.resultCode === 0) {
               dispatch(follow(id));
            }
         })
         .finally(() => dispatch(toggleFollowingProgress(false, id)));
   }
}

export const unfollowThunk = (id: number) => {
   return (dispatch: Dispatch<ActionsTypes>) => {
      dispatch(toggleFollowingProgress(true, id));
      followAPI.setFollow(id)
         .then((data) => {
            console.log(data);
            if (data.resultCode === 0) {
               dispatch(unfollow(id));
            }
         })
         .finally(() => dispatch(toggleFollowingProgress(false, id)));
   }
}