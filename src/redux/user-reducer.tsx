import {ActionTypes, PostDataType} from "./state";
import {ChangeEvent} from "react";

export type UsersType = {
    id: string,
    PhotoULR: any,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}
export type InitialStateType = {
    users: Array<UsersType>
  }
let initialState: InitialStateType = {
    /*newPostText: '',*/
    users: []
}

export const UserReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}


        default :
            return state
    }
}
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {type: 'SET-USERS', users} as const
}