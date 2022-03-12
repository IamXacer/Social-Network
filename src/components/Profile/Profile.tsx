import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./My Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}