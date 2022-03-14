import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./My Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";
/*import {PostDataType} from "../../index";*/
/*import {PostDataType} from "../../index"*/

/*export type PostDataType = {
        id: string
        message: string
        likeCount:string
}*/
export type ProfileType= {
    postData:Array<PostDataType>
}
export const Profile = (props:ProfileType) => {


   /*    const postData = [
           {id: '1', message: "Hi, how are you", likeCount: '15'},
           {id: '1', message: "It's my first post", likeCount: '35'},
           {id: '1', message: "Hi Yo", likeCount: '25'},
           {id: '1', message: "Yo, how are you", likeCount: '11'},
       ]*/
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}