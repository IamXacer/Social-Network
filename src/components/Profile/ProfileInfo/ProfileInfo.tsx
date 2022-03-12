import React from "react";
import classes from './ProfileInfo.module.css'


export const ProfileInfo = ()=> {
    return (
        <div >
            <div>
                <img
                    src='https://swall.teahub.io/photos/small/0-7025_nature-wallpaper-with-flowers-image-good-morning-photo.jpg'/>
            </div>
            <div className={classes.diskriptionBlock}>
                ava+discription
            </div>

        </div>
    )
}
