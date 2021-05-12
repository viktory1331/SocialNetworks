import { PostPropsType, ActionsTypes, ProfilePageType } from './store';
import { UserType } from './users-reducer';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState: ProfilePageType = { 
   posts: [
   { id: 1, message: 'Hi', numberOfLike: '2 likes' },
   { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
   { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
],
   newPostText: 'It-kamasutra',
   profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes) => {
   switch(action.type ) {
      case ADD_POST: {
         const newPost: PostPropsType = {
            id: new Date().getTime(),
            message: state.newPostText,
            numberOfLike: '0',
         };
         return {...state, posts: [...state.posts, newPost], newPostText : ''}
      }
      case UPDATE_NEW_POST_TEXT:{
         return {...state, newPostText: action.newText}
      } 
      case SET_USER_PROFILE:{
         return {...state, profile: action.profile}
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
   export const setUserProfile = (profile: null | UserType) => {
       return {
            type: SET_USER_PROFILE,
            profile
       } as const 
    }