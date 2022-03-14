import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state"
import {DialogsType, MessageType,PostDataType} from "./redux/state"
/*import {dialogs, postData,message} from "./redux/state";*/


/*
export type DialogsType = {
    id:string
    name:string
}
export type MessageType = {
    id:string
    message:string
}
/!*export type PosDialogType = {
    dialogsType:Array<DialogsType>
    messageType:Array<MessageType>
}*!/
export const dialogs =[
    {id:'1',name:'Dimich'},
    {id:'2',name:'Valere'},
    {id:'3',name:'Sasha'},
    {id:'4',name:'Victor'},
    {id:'5',name:'Andrei'},
]
export const message =[
    {id:'1',message:'Hi'},
    {id:'2',message:'How are you React?'},
    {id:'3',message:'Wan a titch Redax'},
    {id:'4',message:'YO'},
]

export type PostDataType = {
        id: string
        message: string
        likeCount:string
}

    const postData = [
           {id: '1', message: "Hi, how are you", likeCount: '15'},
           {id: '1', message: "It's my first post", likeCount: '35'},
           {id: '1', message: "Hi Yo", likeCount: '25'},
           {id: '1', message: "Yo, how are you", likeCount: '11'},
       ]
*/


ReactDOM.render(
    <React.StrictMode>
        <App  Appstate={state}/>

    </React.StrictMode>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
