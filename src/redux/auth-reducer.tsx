import {ActionTypes} from "./state";

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
    login:null,
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
