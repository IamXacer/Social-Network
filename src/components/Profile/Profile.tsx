import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./My Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
/*import {MyPostsContainer} from "./My Posts/MyPostContainer";*/
import { StoreType } from "../../redux/redux-store";
import {SuperMyPostsContainer} from "./My Posts/MyPostContainer";
/*import {PostDataType} from "../../index";*/
/*import {PostDataType} from "../../index"*/

/*export type PostDataType = {
        id: string
        message: string
        likeCount:string
}*/
export type ProfileType= {
   /* store:StoreType*/

}
export const Profile = (props:ProfileType) => {



    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostsContainer />

        </div>
    )
}