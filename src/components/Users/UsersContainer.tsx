import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/user-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

type mapStateToPropsType = {
  users:InitialStateType
}
type MapDispatchPropsType = {
  follow:(userId:string)=>void
  unfollow:(userId:string)=>void
  setUsers:(users:Array<UsersType>)=>void
}
export type UsersPropsType = MapDispatchPropsType &  Array<UsersType>

const mapStateToProps = (state:AppRootStateType):{ users: Array<UsersType> } =>{
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
  return{
follow: (userId:string)=>{
  dispatch(followAC(userId))
},
unfollow:(userId:string)=>{
  dispatch(unfollowAC(userId))
},
    setUsers:(users:Array<UsersType>)=>{
  dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect
(mapStateToProps,mapDispatchToProps)
(Users)