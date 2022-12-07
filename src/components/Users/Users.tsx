import React from "react";
import styles from './Users.module.css'
import {UsersType} from "../../redux/user-reducer";
import {mapStateToPropsType, UsersPropsType} from "./UsersContainer";
import  axios from "axios";
import userPhoto from '../../assets/images/user.png'

export type UserType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void

}

export const Users = (props: UserType) => {

    let getUsers = ()=>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                props.setUsers(response.data.items)
            })
    }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>


                <div>

                    <img

                        src ={u.photos.small !=null ? u.photos.small : userPhoto}
                         className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                    {/*<div><button>Follow</button></div>*/}
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