import React from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";
import {PostDataType} from "../../../redux/state";
/*import {PostDataType} from "../../../index";*/
/*export type PostDataType = {
    id: string
   message: string
   likeCount:string
}*/
export  type MyPostType = {
    postData:Array<PostDataType>
}
export const MyPosts = (props: MyPostType) => {

 /*   const PostData = [
        {id: '1', message: "Hi, how are you", likeCount: '15'},
        {id: '1', message: "It's my first post", likeCount: '35'},
        {id: '1', message: "Hi Yo", likeCount: '25'},
        {id: '1', message: "Yo, how are you", likeCount: '11'},
    ]*/
    const posts = props.postData.map(postmasage =>
        <Post id={postmasage.id} message={postmasage.message}
              likeCount={postmasage.likeCount}/>
    )


return (
    <div className={classes.descriptionBlock}>
        <h3> My posts </h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <span> <button className={classes.But}>Add post</button></span>
            </div>
        </div>
        <div className={classes.descriptionBlock}>
            {posts}


        </div>
    </div>
)
}
