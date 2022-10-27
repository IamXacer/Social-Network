import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

import {follow, UsersType} from "../../redux/user-reducer";
import axios from "axios";
import {userAPI} from "../../Api/api";

export type UserType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount:number
    pageSize:number
    currentPage:number
      onPageChanged:(pages:number)=>void
    toglefollowingInProgress:(followingInProgress:boolean,id:string)=>void
    followingInProgress:string[]

}


export let Users1 = (props:UserType) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)


    return <div>
        <div>
            {pages.map(pages => {
                return <span className={props.currentPage === pages ? styles.selectedPage : ''}
                             onClick={(e) => props.onPageChanged(pages)}
                >{pages}</span>
            })}</div>
        {

            props.users.map((u) => <div key={u.id}>
                <div>
          <NavLink to={'/profile/' + u.id} >
              <img
                  src={u.photos.small ? u.photos.small : userPhoto}
                        className={styles.usersPhoto}/></NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=>id ===u.id)}

                                  onClick={() => {props.unfollow(u.id)}}>UnFollow</button>

                        : <button disabled={props.followingInProgress.some(id=>id ===u.id)}

                                  onClick={() => {props.follow(u.id)}}>Follow</button>}

                </div>
                <div>
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                </div>
                <div>
                    <span>{'u.location.country'}</span>
                    <div>{'u.location.city'}</div>
                </div>
            </div>)}
    </div>

}

export default Users1