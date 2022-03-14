import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { DialogItems } from "./DialgItem/DialogItem";
import { Message } from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/state";
/*import {dialogs, DialogsType, MessageType} from "../../index";*/



/*export type MessagesType={
    id:string
    message:string
}
export type DialogsType={
    id:string
    name:string
}
export type DialogItemsType = {
    id:string
    name :string

}
export type MesageType = {
    id:string
    message:string
/!*    message:Array<Message>*!/

}*/
type PostDialogType={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
   /* dialogs:Array<DialogsType>
    message:Array<MessagesType>*/
}


export const PostDialogs = (props:PostDialogType) => {


    let dialogsElement = props.dialogs.map (d=><DialogItems id={d.id} name={d.name}/>)

    const messageElemets = props.message.map(message=> <Message id={message.id}message={message.message}/>)

  return (
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          {dialogsElement}


      </div>

        <div className={classes.messages}>
            {messageElemets}
       {/* <Message  id={mesages[0].id} message={mesages[0].message}/>
        <Message  id={mesages[1].id} message={mesages[1].message}/>     {messageElemets}
        <Message  id={mesages[2].id} message={mesages[2].message}/>*/}
                 </div>
      </div>
  )
}