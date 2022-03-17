import React from "react";
import classes from './../Dialogs.module.css'

export type MesageType = {
    id:string
    message:string
/*    message:Array<Message>*/

}


export const Message = (props:MesageType) => {
    return <div className={classes.dialog}>{props.message}
    </div>
}

