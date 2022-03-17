import React from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";
import {PostDataType} from "../../../redux/state";


export  type MyPostType = {
    postData:Array<PostDataType>
}
export const MyPosts = (props: MyPostType) => {

    const posts = props.postData.map(postmasage =>
        <Post id={postmasage.id} message={postmasage.message}
              likeCount={postmasage.likeCount}/>
    )


const olClickAlert = () => {

  alert()
}

return (
    <div className={classes.descriptionBlock}>
        <h3> My posts </h3>
        <div>
            <div>
                <textarea ref={}></textarea>
            </div>
            <div>
                <span> <button className={classes.But} onClick={olClickAlert}>Add post</button></span>
            </div>
        </div>
        <div className={classes.descriptionBlock}>
            {posts}


        </div>
    </div>
)
}
