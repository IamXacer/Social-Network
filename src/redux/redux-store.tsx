import {applyMiddleware, combineReducers} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import { legacy_createStore as createStore} from 'redux'
import {UserReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"


export let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer,
    usersPage:UserReducer,
    auth:authReducer
})

export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type StoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>