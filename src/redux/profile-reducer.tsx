import {ActionTypes, PostDataType} from "./state";
import {ChangeEvent} from "react";

let initialState = {
    newPostText: '',
        postData: [
    {id: '1', message: "Hi, how are you", likeCount: 15},
    {id: '1', message: "It's my first post", likeCount: 35},
    {id: '1', message: "Hi Yo", likeCount: 25},
    {id: '1', message: "Yo, how are you", likeCount: 11},
],
    profile:null
}

export const ProfileReducer =
    (state=initialState,action:ActionTypes) => {
    switch (action.type){
        case 'ADD-POST' :

            return {...state, postData:[{id: '5', message: state.newPostText, likeCount: 0,},...state.postData,],newPostText : "",}

        case 'UPDATE-NEW-POST-TEXT':{
            return{...state,
                newPostText:action.newText}
        }
        case "SET-USER-PROFILE":{
          return   {...state,profile:action.profile}
        }
        default :return state
    }
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const setUserProfileAC = (profile:null) => {
    return {
        type: 'SET-USER-PROFILE',profile
    } as const
}
export const updateNewPostTextAC = (newText:string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText:newText } as const
}