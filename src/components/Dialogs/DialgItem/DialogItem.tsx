import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type MessagesType={
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
/*    message:Array<Message>*/

}


export const DialogItems = (props:DialogItemsType) => {
    let patch = '/dialog/1' + props.id
  return (
      <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to={patch}>{props.name} </NavLink>
      </div>
  )}
