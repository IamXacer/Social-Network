import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemsType = {
    name :string
    id:string
}
export type MesageType = {
    message:string
    id:string
}

export const DialogItems = (props:DialogItemsType) => {
    let patch = '/dialog/1' + props.id
  return (
      <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to={patch}>{props.name} </NavLink>
      </div>
  )}
const Message = (props:MesageType) => {
    return <div className={classes.dialog}>{props.message}</div>
}




export const Dialogs = () => {

const dialogs =[
    {id:'1',name:'Dimich'},
    {id:'2',name:'Valere'},
    {id:'3',name:'Sasha'},
    {id:'4',name:'Victor'},
    {id:'5',name:'Andrei'},
]
    const mesages =[
        {id:'1',message:'Hi'},
        {id:'2',message:'How are you React?'},
        {id:'3',message:'Wan a titch Redax'},
        {id:'4',message:'YO'},
    ]

    const dialogsElement = dialogs.map(dialog=>{
     <DialogItems name={dialog.id} id={dialog.name}/>})

    const messageElemets = mesages.map(message=> <Message message={message.id}id={message.message}/>)

  return (
      <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          {dialogsElement}
          {messageElemets}
<DialogItems name={dialogs[0].name} id={dialogs[0].id}/>
<DialogItems name={dialogs[1].name} id={dialogs[1].id}/>
<DialogItems name={dialogs[2].name} id={dialogs[2].id}/>
<DialogItems name={dialogs[3].name} id={dialogs[3].id}/>


      </div>

        <div className={classes.messages}>
        <Message  id={mesages[0].id} message={mesages[0].message}/>
        <Message  id={mesages[1].id} message={mesages[1].message}/>
        <Message  id={mesages[2].id} message={mesages[2].message}/>
                 </div>
      </div>
  )

}