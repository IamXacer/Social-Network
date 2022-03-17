import React from 'react';

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
    likeCount:string
}
/*export type stateType ={
        postData:Array<PostDataType>
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}*/
export type profilePageType ={
    postData: Array<PostDataType>
}
export type dialogsPageType ={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}
export type stateType= {
    profilePage:profilePageType
    dialogsPage:dialogsPageType
}
/*export const postData = */


 export const state =  {
     profilePage:{
         postData:[
             {id: '1', message: "Hi, how are you", likeCount: '15'},
             {id: '1', message: "It's my first post", likeCount: '35'},
             {id: '1', message: "Hi Yo", likeCount: '25'},
             {id: '1', message: "Yo, how are you", likeCount: '11'},
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