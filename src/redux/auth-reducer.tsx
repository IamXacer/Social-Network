import { Dispatch } from "redux";
import {ActionTypes} from "./state";
import {LoginAPI} from "../Api/api";

/*export type UsersType = {
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

}*/
export type LocationType = {
    city: string,
    country: string
}

export type InitialStateType = {
    userId: null,
    email:null,
    login:any,
    isAuth:boolean
}

const initialState: InitialStateType = {
    userId: null,
   email:null,
    login:null,
    isAuth:false

}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }


        default :
            return state
    }
}
export const setUserDataAC = (userId: null,email:null,login:null) => {
    return {
        type: 'SET_USER_DATA',data:{userId,email,login}
    } as const
}




export const HeaderThunk = (userId: null, email:null, login:null) => (dispatch:Dispatch) => {
    LoginAPI.me().then(response => {
        if(response.data.resultCode === 0){
            let {id,login,email} =response.data.data
            dispatch(setUserDataAC(id,email,login))

        }
    })
    }


