import {ChangeEvent} from "react";
import {addPostActionCreator, ProfileReducer, setUserProfileAC, updateNewPostTextAC} from "./profile-reducer";
import {DialogsReducer, sendNewMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {
    acceptFollow, acceptUnfollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toglefollowingInProgress,
    togleIsFetching,
    } from "./user-reducer";
import {setUserDataAC} from "./auth-reducer";

export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string

}
export type PostDataType = {
    id: string
    message: string
    likeCount: number
}
export type sidebarPageType = {}

export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile:null
}
export type dialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessagBody: string
    /*  newDialogText:string*/
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebarPage:sidebarPageType
}

export type addPost = {
    id: string,
    message: string,
    likeCount: number,
}


export type StoreType = {
    _state: stateType,
    /*   updateNewPostTexts: (newText:string) =>void,*/
    addMesage: (postsMasseges: string) => void,
    /*   addPost: (postMasseges:string) => void,*/
    subscribe: (observer: () => void) => void,
    _callSubscriber: () => void,
    getState: () => stateType,
    dispatch: (action: ActionTypes) => void
    /*  updateNewDialogTexts:(newTextDialog:string) =>void*/

}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostActionType =  ReturnType<typeof updateNewPostTextAC>
export type updateNewMessageBodyACType =  ReturnType<typeof updateNewMessageBodyAC>
export type sendNewMessageACType =  ReturnType<typeof sendNewMessageAC>
export type followACType =  ReturnType<typeof acceptFollow>
export type unfollowACType =  ReturnType<typeof acceptUnfollow>
export type setUserACType =  ReturnType<typeof setUsers>
export type setCurrentPageACType =  ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType =  ReturnType<typeof setUsersTotalCount>
export type settogleIsFetchingACType =  ReturnType<typeof togleIsFetching>
export type setUserProfileACType =  ReturnType<typeof setUserProfileAC>
export type setUserDataACType =  ReturnType<typeof setUserDataAC>
export type toglefollowingInProgressType =  ReturnType<typeof toglefollowingInProgress>

export type ActionTypes =
    AddPostActionType
    | UpdatePostActionType
    | updateNewMessageBodyACType
    |sendNewMessageACType
|followACType
|unfollowACType
|setUserACType
|setCurrentPageACType
|setUsersTotalCountACType
|settogleIsFetchingACType
|setUserProfileACType
|setUserDataACType
|toglefollowingInProgressType


export const Store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            postData: [
                {id: '1', message: "Hi, how are you", likeCount: 15},
                {id: '2', message: "It's my first post", likeCount: 35},
                {id: '3', message: "Hi Yo", likeCount: 25},
                {id: '4', message: "Yo, how are you", likeCount: 11},
            ],
            profile:null
            /* newPostText:[
                 {message: 'it-kamasutra'}
             ]*/
        },
        dialogsPage: {
            /* newDialogText: '',*/
            dialogs: [
                {id: '1', name: 'Dimich'},
                {id: '2', name: 'Valere'},
                {id: '3', name: 'Sasha'},
                {id: '4', name: 'Victor'},
                {id: '5', name: 'Andrei'},
            ],
            message: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How are you React?'},
                {id: '3', message: 'Wan a titch Redax'},
                {id: '4', message: 'YO'},
            ],
            newMessagBody: '',
        },
        sidebarPage:{},
    },
    _callSubscriber() {
        console.log('State changed')
    },

    addMesage(postsMasseges: string) {
        let newMessage: MessageType = {
            id: '5',
            message: postsMasseges
        }
        this._state.dialogsPage.message.push(newMessage)

        this._callSubscriber()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },


    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage ,action)
        this._state.sidebarPage = SidebarReducer(this._state.dialogsPage ,action)

        this._callSubscriber()

    }
}























