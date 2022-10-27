import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    acceptFollow, acceptUnfollow,
     getUsers,
    setCurrentPage,
    toglefollowingInProgress,
    UsersType
} from "../../redux/user-reducer";
import Users1 from "./Users1";
import { Prealoader } from "../common/Prealoader/Prealoader";



export type mapStateToPropsType = {

    users:Array<UsersType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:string[]
}

export type MapDispatchPropsType = {
    acceptFollow:(userId:string)=>void
    acceptUnfollow:(userId:string)=>void
  /*setUsers:(users:Array<UsersType>)=>void*/
  setCurrentPage:(pageNumber:number)=>void
  /*  setUsersTotalCount:(totalUsersCount:number)=>void
    togleIsFetching:(isFetching:boolean)=>void*/
    toglefollowingInProgress:(followingInProgress:boolean,userId:string)=>void
    getUsers:(currentPage:number,pageSize:number)=>void
/*    onPageChanged:(pages:number)=>void*/

}
export type UsersPropsType = MapDispatchPropsType &  mapStateToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UserType> {
  componentDidMount() {

this.props.getUsers(this.props.currentPage,this.props.pageSize)
  }


  onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber,this.props.pageSize)
  }

  render() {
    return <>
        {this.props.isFetching ?<Prealoader/> : null}

        <Users1 totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.acceptUnfollow}
                follow={this.props.acceptFollow}
                followingInProgress={this.props.followingInProgress}
                toglefollowingInProgress={this.props.toglefollowingInProgress}


        /></>
  }
}

const mapStateToProps = (state:AppRootStateType):mapStateToPropsType =>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}

export const UsersContainer = connect<mapStateToPropsType, MapDispatchPropsType,
    {},  AppRootStateType>
(mapStateToProps,
    {
         acceptFollow, acceptUnfollow,
        setCurrentPage,
        toglefollowingInProgress, getUsers
    })(UsersAPIComponent)

export type UserType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    pages: number
    currentPage: number
    togleIsFetching:(isFetching:boolean)=>void
}