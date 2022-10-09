import React from "react";
import classes from './ProfileInfo.module.css'
import {Prealoader} from "../../common/Prealoader/Prealoader";


export const ProfileInfo = (props:any)=> {
    if (!props.profile ){
        return <Prealoader/>
    }

    return (
        <div >
            <div>
                <img
                    src='https://swall.teahub.io/photos/small/0-7025_nature-wallpaper-with-flowers-image-good-morning-photo.jpg'/>
            </div>
            <div className={classes.diskriptionBlock}>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <img src={props.profile.photos.large}/>
                ava+discription
            </div>

        </div>
    )
}
