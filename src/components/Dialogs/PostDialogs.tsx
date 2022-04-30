import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { DialogItems } from "./DialgItem/DialogItem";
import { Message } from "./Message/Message";
import {
    sendNewMessageAC,
    updateNewMessageBodyAC,
} from "../../redux/dialogs-reducer";
import {ActionTypes, DialogsType, MessageType} from "../../redux/state";

type PostDialogType={
    dialogs:Array<DialogsType>
    messages:Array<MessageType>
    addMesage:(addMesage:string)=>void
    newMessagBody:string
    dispatch: (action:ActionTypes) =>void


}


export const PostDialogs = (props:PostDialogType) => {


    let dialogsElement = props.dialogs.map ((d)=><DialogItems id={d.id} name={d.name} key={d.id}/>)

    const messageElemets = props.messages.map((m)=> <Message id={m.id}message={m.message} key={m.id}/>)

   /* let newpostElement = React.createRef<HTMLTextAreaElement>()*//*as React.MutableRefObject<HTMLTextAreaElement>*/
let newMessageBody = props.newMessagBody

let onSendMessageClick = () =>{
    props.dispatch(sendNewMessageAC())
}
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    let body = e.target.value
props.dispatch(updateNewMessageBodyAC(body))
    }
    return (
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          {dialogsElement}
      </div>

        <div className={classes.messages}>

            <div>{messageElemets}</div>
            <div></div>
            <div></div>

            <span><textarea placeholder='Enter your message'
            value={newMessageBody} onChange={onNewMessageChange}></textarea></span>
            <div>
            <button className={classes.But} onClick={onSendMessageClick}>Add post</button>
            </div>
       {/* <Message  id={mesages[0].id} message={mesages[0].message}/>
        <Message  id={mesages[1].id} message={mesages[1].message}/>     {messageElemets}
        <Message  id={mesages[2].id} message={mesages[2].message}/>*/}
                 </div>
      </div>
  )
}