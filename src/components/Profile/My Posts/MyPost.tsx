import React from "react";
import {Post} from "./Posts/Post";
import classes from './MyPosts.module.css'
import {ReactPropTypes} from "react";
import {newPostTextType, PostDataType} from "../../../redux/state";


export  type MyPostType = {
    postData:Array<PostDataType>
    addPost:(addPost:string)=>void
    newPostText:Array<newPostTextType>
    value:(message:string | number | undefined)=>void
}
export const MyPosts = (props: MyPostType) => {

    const posts = props.postData.map(postmasage =>
        <Post id={postmasage.id} message={postmasage.message}
              likeCount={postmasage.likeCount}/>
    )

    let newpostElement = React.createRef<HTMLTextAreaElement>() /*as React.MutableRefObject<HTMLTextAreaElement>*/

const olClickAlert = () => {

if (newpostElement.current){
  props.addPost( newpostElement.current.value )
    newpostElement.current.value = ''
}}
const onChange = () => {
  
}
return (
    <div className={classes.descriptionBlock}>
        <h3> My posts </h3>
        <div>
            <div>
              <span>  <textarea
                  onChange={onChange}
                  value={props.newPostText}
                  ref={newpostElement}/></span>
            </div>
            <div>
                <button className={classes.But} onClick={olClickAlert}>Add post</button>
            </div>
        </div>
        <div className={classes.descriptionBlock}>
            {posts}


        </div>
    </div>
)
}
