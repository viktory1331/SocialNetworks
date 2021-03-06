import { Dispatch } from 'redux';
import { profileAPI, usersAPI } from '../api/Api';
import { ActionsTypes } from './redux-store';
import { UserType } from './users-reducer';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState: ProfilePageType = {
   posts: [
      { id: 1, message: 'Hi', numberOfLike: '2 likes' },
      { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
      { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
   ],
   profile: null,
   status: ''
}

export type PostPropsType = {
   id: number;
   message: string;
   numberOfLike: string;
};

export type ProfilePageType = {
   posts: Array<PostPropsType>;
   profile: null | UserType;
   status: string
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
   switch (action.type) {
      case ADD_POST: {
         const newPost: PostPropsType = {
            id: new Date().getTime(),
            message: action.newPostText,
            numberOfLike: '0',
         };
         return { ...state, posts: [...state.posts, newPost] }
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
         return { ...state, status: action.status }
      }
      default:
         return state
   }
}

export const addPost = (newPostText: string) => {
   return {
      type: ADD_POST,
      newPostText: newPostText,
   } as const;
};
export const setUserProfile = (profile: null | UserType) => ({
   type: SET_USER_PROFILE,
   profile
} as const
)
export const setStatus = (status: string) => ({
   type: SET_STATUS,
   status
} as const
)
export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
   if (userId)
      usersAPI
         .getProfile(userId)
         .then((response) => {
            dispatch(setUserProfile(response.data));
         })
         .catch((e) => console.log(e));
}
export const getStatus = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
   if (userId)
      profileAPI
         .getStatus(userId)
         .then((response) => {
            dispatch(setStatus(response.data));
         })
         .catch((e) => console.log(e));
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
   profileAPI
      .updateStatus(status)
      .then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
         }
      })
      .catch((e) => console.log(e));
}