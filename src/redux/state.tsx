import React from 'react';
import {rerenderEntireTree} from "../render";

/*export type PosDialogType = {
    dialogsType:Array<DialogsType>
    messageType:Array<MessageType>
}*/
/*export const dialogs =*/
/*export const message =*/
export type DialogsType = {
    id:string
    name:string
}
export type MessageType = {
    id:string
    message:string
}
export type PostDataType = {
    id: string
    message: string
    likeCount:number
}
/*export type stateType ={
        postData:Array<PostDataType>
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}*/
export type profilePageType ={
    postData: Array<PostDataType>
    newPostText:Array<newPostTextType>
}
export type dialogsPageType ={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}
export type stateType= {
    profilePage:profilePageType
    dialogsPage:dialogsPageType

}

export type newPostTextType = {
    message:string
}
/*export const postData = */


 export const state:stateType =  {
     profilePage:{
         postData:[
             {id: '1', message: "Hi, how are you", likeCount: 15},
             {id: '1', message: "It's my first post", likeCount: 35},
             {id: '1', message: "Hi Yo", likeCount: 25},
             {id: '1', message: "Yo, how are you", likeCount: 11},
         ],
         newPostText:[
             {message: 'it-kamasutra'}
         ]
     },
     dialogsPage:{
         dialogs:[
             {id:'1',name:'Dimich'},
             {id:'2',name:'Valere'},
             {id:'3',name:'Sasha'},
             {id:'4',name:'Victor'},
             {id:'5',name:'Andrei'},
         ],
         message:   [
             {id:'1',message:'Hi'},
             {id:'2',message:'How are you React?'},
             {id:'3',message:'Wan a titch Redax'},
             {id:'4',message:'YO'},
         ],
     }
 }
 export type addPost = {
     id:string,
     message:string,
     likeCount:number,

 }
 export const addPost = (postMasseges:string) => {
     let newPost:PostDataType = {
         id:'5',
         message: postMasseges,
         likeCount:0
     };
   state.profilePage.postData.push(newPost)
     rerenderEntireTree(state)
 };

export const addMesage = (postsMasseges:string) => {
  let newMessage:MessageType = {
      id: '4',
      message:postsMasseges
  }
  state.dialogsPage.message.push(newMessage)
    rerenderEntireTree(state)
}





















