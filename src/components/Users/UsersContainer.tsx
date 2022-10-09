import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, togleIsFetching,
    unfollow,
    UsersType
} from "../../redux/user-reducer";
import Users1 from "./Users1";
import { Prealoader } from "../common/Prealoader/Prealoader";
import {userAPI} from "../../Api/api";


export type mapStateToPropsType = InitialStateType

export type MapDispatchPropsType = {
  follow:(userId:string)=>void
  unfollow:(userId:string)=>void
  setUsers:(users:Array<UsersType>)=>void
  setCurrentPage:(pageNumber:number)=>void
    setUsersTotalCount:(totalUsersCount:number)=>void
    togleIsFetching:(isFetching:boolean)=>void
/*    onPageChanged:(pages:number)=>void*/

}
export type UsersPropsType = MapDispatchPropsType &  mapStateToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UserType> {
  componentDidMount() {
      this.props.togleIsFetching(true)
      userAPI.GetUsers(this.props.currentPage,this.props.pageSize).then(data => {
          debugger
            this.props.togleIsFetching(false)
          this.props.setUsers(data.items)
          this.props.setUsersTotalCount(data.totalCount)
        })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
      this.props.togleIsFetching(true)

      userAPI.GetUsers(pageNumber,this.props.pageSize).then(data => {
          this.props.setUsers(data.items)
            this.props.togleIsFetching(false)
        })
  }

  render() {
    return <>
        {this.props.isFetching ?<Prealoader/> : null}

        <Users1 totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}


            /*setCurrentPage={this.props.currentPage}*/
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

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow,
        setUsers, setCurrentPage,
        setUsersTotalCount, togleIsFetching,
    })(UsersAPIComponent)

export type UserType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    pages: number
    currentPage: number

}