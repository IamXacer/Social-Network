import {ActionTypes} from "./state";
import { userAPI} from "../Api/api";
import {Dispatch} from "redux";

export type UsersType = {
    id: string,
    PhotoULR: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,
    name:string,
    photos:{
        small: string,
        large: string
    },

}
export type LocationType = {
    city: string,
    country: string
}

export type InitialStateType = {
    totalUsersCount:number
    pageSize:number
    currentPage: number;
      users: Array<UsersType>,
    isFetching:boolean,
    followingInProgress:string[],
}

const initialState: InitialStateType = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress:[],

}

export const UserReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ?  {...u, followed: true}:u)}
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u})
            }
        case 'SET-USERS':
            return {...state, users:action.users}

        case "SET-CURRENT-PAGE" :
            return {...state,currentPage:action.currentPage}

        case 'SET-TOTAL-COUNT' :
            return {...state,totalUsersCount:action.totalCount}

        case 'TOGGLE-IS-FETCHING':
            return {...state,isFetching:action.isFetching}
        case 'FOLOWING_PROGRESS':{
            return {...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id != action.userId)

            }
        }


        default :
            return state
    }
}
export const acceptFollow = (userId: string) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const acceptUnfollow = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage:number) =>{
return {type:'SET-CURRENT-PAGE',currentPage} as const
}

export const setUsersTotalCount = (totalCount:number) => {
  return { type: 'SET-TOTAL-COUNT',totalCount} as const
}
export const togleIsFetching = (isFetching:boolean) => {
  return{type:'TOGGLE-IS-FETCHING',isFetching} as const
}
export const toglefollowingInProgress = (isFetching:boolean,userId:string) => {
    return{type:'FOLOWING_PROGRESS',isFetching,userId} as const
}

export const getUsers = (currentPage:number,pageSize:number) => {
    return (dispatch:Dispatch) => {
        dispatch(togleIsFetching(true))
        userAPI.GetUsers(currentPage, pageSize).then(data => {
            dispatch(togleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
 export const follow = (userId:string) => {

    return (dispatch:Dispatch) => {
        dispatch(toglefollowingInProgress(true,userId))
        userAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0)
                dispatch(acceptFollow(userId))
           dispatch( toglefollowingInProgress(true,userId))
        })
    }
}
export const unfollow = (userId:string) => {

    return (dispatch:Dispatch) => {
        dispatch(toglefollowingInProgress(true,userId))
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0)
                dispatch(acceptUnfollow(userId))
            dispatch( toglefollowingInProgress(true,userId))
        })
    }
}
