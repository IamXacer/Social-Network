import React from "react";
import styles from './Users.module.css'
import {UsersType} from "../../redux/user-reducer";

export type UserType = {
    users:Array<UsersType>
    follow:(userId:string)=>void
    unfollow:(userId:string)=>void
    setUsers:(users:Array<UsersType>)=>void

}

export const Users = (props: UserType) => {
    if (props.users.length === 0){
   props.setUsers([
       {
           id: '1', PhotoULR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
           followed: true, fullName: 'Dmitry', status: 'I am a Boss', location: {city: 'Minsk', country: 'Belarus '}},
       {
           id: '1',
           PhotoULR: 'https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8c740569d1a4ca32d2.jpg',
           followed: false, fullName: "Andrey", status: 'I am a Boss too', location: {city: 'Mosckow', country: 'Russia '}},
       {
           id: '1', PhotoULR: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
           followed: true, fullName: "Sasha", status: 'I am a Boss too', location: {city: 'Kyev', country: 'Ukrain '}},
       {
           id: '1', PhotoULR: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N2fO2Zee_yjQGo8LTd1kxAjTnY5OQ0mwFQ&usqp=CAU',
           followed: false, fullName: 'Mike', status: 'I am a Boss', location: {city: 'Ney-York', country: 'USA '}}])}

    return <div>
        {props.users.map(u=> <div key={u.id}>
     <span>
       <div><img src={u.PhotoULR} className={styles.usersPhoto}/></div>

       <div> {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>unfollowed</button> :
           <button onClick={()=>{props.follow(u.id)}}>followed</button>}

      </div>
     </span>
                <span>
      <span>
      <div>{u.fullName}</div><div>{u.status}</div></span>
     <span>
         <div>{u.location.country}</div>
          <div>{u.location.city}</div>
     </span>
     </span>

            </div>
        )}

    </div>
}