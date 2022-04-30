import {ActionTypes, PostDataType} from "./state";
import {ChangeEvent} from "react";

let initialState = {
    newPostText: '',
        postData: [
    {id: '1', message: "Hi, how are you", likeCount: 15},
    {id: '1', message: "It's my first post", likeCount: 35},
    {id: '1', message: "Hi Yo", likeCount: 25},
    {id: '1', message: "Yo, how are you", likeCount: 11},
]
}

export const ProfileReducer =
    (state=initialState,action:ActionTypes) => {
    switch (action.type){
        case 'ADD-POST' :
             let newPost: PostDataType = {
                id: '5',
                message: state.newPostText,
                likeCount: 0,
             };
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default :return state
    }
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value} as const
}