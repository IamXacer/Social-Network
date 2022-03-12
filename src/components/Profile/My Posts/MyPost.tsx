import React from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";

export  type MyPostType = {

}
export const MyPosts = (props: MyPostType) => {

    const  PostData = [
        {id:'1', message:"Hi, how are you", likeCount:'15'},
        {id:'1', message:"It's my first post", likeCount:'35'},
        {id:'1', message:"Hi Yo" , likeCount:'25'},
        {id:'1', message:"Yo, how are you", likeCount:'11'},
    ]

    return (
        <div className={classes.descriptionBlock}>
            <h3>  My posts </h3>
            <div>
                <div>
                <textarea></textarea>
            </div>
                <div>
              <span> <button className={classes.But}>Add post</button></span>
                </div>
            </div>
            <div className={classes.descriptionBlock}>
            <Post id = {PostData[0].id} message = {PostData[0].message} likeCount={PostData[0].likeCount} />
            <Post id = {PostData[0].id} message = {PostData[1].message} likeCount={PostData[1].likeCount} />
            <Post id = {PostData[0].id} message = {PostData[2].message} likeCount={PostData[2].likeCount} />
            <Post id = {PostData[0].id} message = {PostData[3].message} likeCount={PostData[3].likeCount} />

                </div>
        </div>
    )
}
