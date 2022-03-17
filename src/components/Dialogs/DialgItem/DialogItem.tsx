import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


/*export type MessagesType={
    id:string
    message:string
}
export type DialogsType={
    id:string
    name:string
}*/
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
      <div className={classes.dialog + ' ' + classes.active} >
          <NavLink to={patch} >

<div className={classes.item}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0X-kxQtO-q2n_J-kZHVh5pDeznpSEw865Vy3BITNa7fzz2zxS5CRyPCyYLXgTgfB1JHM&usqp=CAU'}/>
              {props.name}
</div>
          </NavLink>
      </div>
  )}
