import React, {ChangeEvent} from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";
import {ActionTypes, addPostActionCreator, PostDataType, updateNewPostText} from "../../../redux/state";
import {log} from "util";

export  type MyPostType = {
    /*    addPost:(addPost:string)=>void*/
    postData:Array<PostDataType>
    /* addPostCallback:(addPost:string)=>void*/
    /*  ChangeNewTextCallback:(newText:string)=>void*/
    newPostText:string
    dispatch: (action: ActionTypes) => void
    /*value:(message:string | number | undefined)=>void*/
}




export const MyPosts = (props: MyPostType) => {
    const posts = props.postData.map(postmasage =>
        <Post id={postmasage.id} message={postmasage.message}
              likeCount={postmasage.likeCount}/>
    )

    /*  let newpostElement = React.createRef<HTMLTextAreaElement>()*/
    /*as React.MutableRefObject<HTMLTextAreaElement>*/

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    /* const onPostChange = () => {
         let text = newpostElement.current?.value
         props.ChangeNewTextCallback(text)
     }*/

    const NewPostChangeHandler = (newText:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostText(newText))
    }
    return (
        <div className={classes.descriptionBlock}>
            <h3> My posts </h3>
            <div>
                <div>
              <span>  <textarea
                  /*ref={newpostElement}*/
                  onChange={NewPostChangeHandler}
                  value={props.newPostText}/></span>
                </div>
                <div>
                    <button className={classes.But} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.descriptionBlock}>
                {posts}


            </div>
        </div>
    )
}
