import {combineReducers} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import { legacy_createStore as createStore} from 'redux'

export let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer
})

export let store = createStore(rootReducer)

export type StoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>