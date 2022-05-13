import {ActionTypes, PostDataType} from "./state";
import {ChangeEvent} from "react";

let initialState = {
    newPostText: '',
        users: [
    {id: '1', followed:true,fullname: "Dmitry", Status:'I am a Boss', location:{city:'Minsk', country:'Belarus '}},
    {id: '1',followed:true ,fullname: "Andrey", Status: 'I am a Boss too', location:{city:'Mosckow', country:'Russia '}},
    {id: '1', followed:true,fullname: "Sasha", Status: 'I am a Boss too', location:{city:'Kyev', country:'Ukrain '}},
    {id: '1', followed:true,fullname: "Mike", Status: 'I am a Boss', location:{city:'Ney-York', country:'USA '}},

]
}

export const UserReducer =
    (state=initialState,action:ActionTypes) => {
    switch (action.type){
        case 'FOLLOW':
      return {
          ...state, users: state.users.map(u => {
              if (u.id === action.userId) {
                  return {...u, followed: false}
              } return u
          })
      }
      case 'UNFOLLOW':
            return  {
                ...state,
                users:state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users] }


        default :return state
    }
}
export const followAC = (userId:string) => {
    return {
        type: 'FOLLOW',userId
    } as const
}
export const unfollowAC = (userId:string) => {
    return {type: 'UNFOLLOW',userId } as const
}
export const setUsersAC = (users:any) => {
    return {type: 'SET-USERS',users } as const
}