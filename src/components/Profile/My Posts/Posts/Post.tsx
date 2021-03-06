import classes from './Post.module.css'
import React from "react";

export  type PostType = {
    message?:string,
    likeCount:number,
    id:string,
}

export const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img src={'https://dishub.kukarkab.go.id/rdy-content/uploads/avatar.jpg'}/>

            {props.message}

            <div className={`${classes.item} ${classes.like}`} >
            <a>Like</a>

              <div className={classes.likeCount} >  {props.likeCount }</div>
            </div>
        </div>
    )
}
