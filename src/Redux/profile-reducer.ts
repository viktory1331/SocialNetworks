import { PostPropsType, ActionsTypes, ProfilePageType } from './State';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action:ActionsTypes) => {
   switch(action.type ) {
      case ADD_POST:
         const newPost: PostPropsType = {
            id: new Date().getTime(),
            message: state.newPostText,
            numberOfLike: '0',
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state  
      default:
         return state
      }
   }

   export const addPostAC = (newPostText: string) => {
      return {
        type: 'ADD-POST',
        newPostText: newPostText,
      } as const;
    };
   export const updatePostTextAC = (newText: string) => {
      return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText,
      } as const;
    };