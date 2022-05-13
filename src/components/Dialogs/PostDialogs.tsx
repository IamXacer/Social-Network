import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { DialogItems } from "./DialgItem/DialogItem";
import { Message } from "./Message/Message";
import { StoreType } from "../../redux/redux-store";
import {ActionTypes, dialogsPageType, DialogsType, MessageType} from "../../redux/state";

type PostDialogType={
    sendMessage:()=>void
    updateNewMessageBody:(body:any)=>void
    dialogsPage: dialogsPageType

}


export const PostDialogs = (props:PostDialogType) => {
    let states = props.dialogsPage



    let dialogsElement = states.dialogs.map ((d)=><DialogItems id={d.id} name={d.name} key={d.id}/>)

    const messageElemets = states.message.map((m)=> <Message id={m.id}message={m.message} key={m.id}/>)

   /* let newpostElement = React.createRef<HTMLTextAreaElement>()*//*as React.MutableRefObject<HTMLTextAreaElement>*/
let newMessageBody = props.dialogsPage.newMessagBody

let onSendMessageClick = () =>{
    props.sendMessage()
}


    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    let body = e.target.value
        props.updateNewMessageBody(body)
        /*props.dispatch(updateNewMessageBodyAC(body))*/
    }


    return (
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          {dialogsElement}
      </div>

        <div className={classes.messages}>

            <div>{messageElemets}</div>
            <div></div>
            <div>

            <span><textarea placeholder='Enter your message'
            value={newMessageBody} onChange={onNewMessageChange}></textarea></span></div>
            <div>
            <button className={classes.But} onClick={onSendMessageClick}>Add post</button>
            </div>
                   </div>
      </div>
  )
}