import React from "react";
import { connect } from "react-redux";
import {Users} from "./Users";
import {dialogsPageType} from "../../redux/state";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/user-reducer";

type mapStateToPropsType = {

}

let mapStateToProps = (state:AppRootStateType) =>{
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch:any) =>{
  return{
follow: (userId:string)=>{
  dispatch(followAC(userId))
},
unfollow:(userId:string)=>{
  dispatch(unfollowAC(userId))
},
    setUsersAC:(users:string)=>{
  dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect
(mapStateToProps,mapDispatchToProps)
(Users)