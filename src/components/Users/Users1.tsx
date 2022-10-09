import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

import { UsersPropsType} from "./UsersContainer";
import {followingInProgressAC, UsersType} from "../../redux/user-reducer";
import axios from "axios";

export type UserType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
  /*  setUsers: (users: Array<UsersType>) => void*/
    totalUsersCount:number
    pageSize:number
    currentPage:number
     // setCurrentPage:any
    onPageChanged:(pages:number)=>void
    followingInProgressAC:(followingInProgress:boolean)=>void
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
                        ? <button onClick={() => {
props.followingInProgressAC(true)
                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                              headers:{
                                 'API-KEY':'9eab0888-bbf6-4f8b-9d11-2c9027933f53'
                              }
                            }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                              props.followingInProgressAC(false)
                                })


                        }}>UnFollow</button>
                        : <button onClick={() => {
                            axios.post
                            (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers:{
                                    'API-KEY':'9eab0888-bbf6-4f8b-9d11-2c9027933f53'
                                }
                            }).then(response => {
                                   if (response.data.resultCode === 0) {}
                                 })

                            props.follow(u.id)}}>Follow</button>}

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