import { Dispatch } from 'redux';
import { profileAPI, usersAPI } from '../api/Api';
import { PostPropsType, ActionsTypes, ProfilePageType } from './store';
import { UserType } from './users-reducer';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState: ProfilePageType = {
   posts: [
      { id: 1, message: 'Hi', numberOfLike: '2 likes' },
      { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
      { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
   ],
   newPostText: 'It-kamasutra',
   profile: null,
   status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
   switch (action.type) {
      case ADD_POST: {
         const newPost: PostPropsType = {
            id: new Date().getTime(),
            message: state.newPostText,
            numberOfLike: '0',
         };
         return { ...state, posts: [...state.posts, newPost], newPostText: '' }
      }
      case UPDATE_NEW_POST_TEXT: {
         return { ...state, newPostText: action.newText }
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
export const updatePostText = (newText: string) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: newText,
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
   usersAPI
      .getProfile(userId)
      .then((response) => {
         dispatch(setUserProfile(response.data));
      })
      .catch((e) => console.log(e));
}
export const getStatus = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
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