import React, {ChangeEvent} from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";
/*import {ActionTypes,  PostDataType,  from "../../../redux/";*/
import {log} from "util";
import {addPostActionCreator,  updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionTypes, PostDataType, stateType} from "../../../redux/state";

export  type MyPostType = {
        addPost:()=>void
    postData:Array<PostDataType>
    /* addPostCallback:(addPost:string)=>void*/
    updateNewPostText:(newText:any)=>void
    newPostText:string
 /*   store:stateType*/
 /*   addPost:()=>void*/
    dispatch: (action: ActionTypes) => void
    /*value:(message:string | number | undefined)=>void*/
}



export const MyPosts = (props: MyPostType) => {
    const posts = props.postData.map(postmasage =>
        <Post id={postmasage.id} message={postmasage.message}
              likeCount={postmasage.likeCount}/>
    )

      let newpostElement = React.createRef<HTMLTextAreaElement>()
    /*as React.MutableRefObject<HTMLTextAreaElement>*/

    const onAddPost = () => {
        props.addPost()
           }

     const updateNewPostText =(e:ChangeEvent<HTMLTextAreaElement>)=> {
         let text = e.target.value
         props.updateNewPostText(text)
     }
/*
    const NewPostChangeHandler = (newText:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(newText))
    }*/
    return (
        <div className={classes.descriptionBlock}>
            <h3> My posts </h3>
            <div>
                <div>
              <span>  <textarea
                                   onChange={updateNewPostText}
                  value={props.newPostText}/></span>
                </div>
                <div>
                    <button className={classes.But}
                            onClick={onAddPost}>
                        Add post</button>
                </div>
            </div>
            <div className={classes.descriptionBlock}>
                {posts}
            </div>
        </div>
    )
}
