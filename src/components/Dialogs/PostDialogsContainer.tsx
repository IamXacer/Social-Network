import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { DialogItems } from "./DialgItem/DialogItem";
import { Message } from "./Message/Message";
import {
    sendNewMessageAC,
    updateNewMessageBodyAC,
} from "../../redux/dialogs-reducer";
import {ActionTypes, dialogsPageType, DialogsType, MessageType} from "../../redux/state";
import {AppRootStateType, store, StoreType} from "../../redux/redux-store";
import {PostDialogs} from "./PostDialogs";
/*import {StoreContext} from "../../StoreContext";*/
import {connect} from "react-redux";

type PostDialogType={
  /*  store: StoreType*/
}
type mapStateToPropsType = {
    dialogsPage:dialogsPageType
}
/*
export const PostDialogsContainer = (props:PostDialogType) => {
    return (
        <StoreContext.Consumer>{
            (store:StoreType)=>{
/!*let state = props.store.getState()*!/

let onSendMessageClick = () =>{
    store.dispatch(sendNewMessageAC())
}
    let onNewMessageChange = (body:string) =>{
   store.dispatch(updateNewMessageBodyAC(body))
    }
    return <PostDialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
    dialogsPage={store.getState().dialogsPage}/>
}}
        </StoreContext.Consumer>)
}
*/

let mapStateToProps = (state:AppRootStateType):mapStateToPropsType=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) =>{
    return{
        updateNewMessageBody: (body:string) =>{
            dispatch(updateNewMessageBodyAC(body))
        },
    sendMessage: () =>{
        dispatch(sendNewMessageAC())
    }
    }
}


export const SuperPostDialigContainer = connect
(mapStateToProps,mapDispatchToProps)
(PostDialogs)
  
