import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/Navbar/NavBar';
import {Profile} from './components/Profile/Profile';
import {PostDialogs} from "./components/Dialogs/PostDialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteComponentProps} from '@reach/router';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
/*import {DialogsType, MessageType, PostDataType} from "./redux/state";*/
import {
    ActionTypes,

    addPost, AddPostActionType,
    dialogsPageType,
    DialogsType,
    MessageType,
    PostDataType,
    profilePageType,
    stateType, Store, StoreType, UpdatePostActionType
} from './redux/state';
/*import { DialogsType, MessageType,  PostDataType} from "./index";*/
/*import {PostDataType} from "./index";*/

/*export type PostDataType = {
    id: string
    message: string
    likeCount:string
}*/
/*export  type AppType = {
    Appstate: {
        postData:Array<PostDataType>
        dialogs:Array<DialogsType>
        message:Array<MessageType>
    }
   /!* Appstate:AppType*!/

}*/
/*export  type AppType = {
    Appstate: {
        postData:Array<PostDataType>
        dialogs:Array<DialogsType>
        message:Array<MessageType>

    }
    stateType: {
    profilePage:profilePageType
    dialogsPage:dialogsPageType
}
}*/
export type AppType = {

    store:stateType
   /* addPost:(addPost:string)=>void*/
/*    ChangeNewText:(newText:string)=>void*/
    addMesage:(postsMasseges:string)=>void
    dispatch: (action: ActionTypes) => void
 /*   dialogs:Array<DialogsType>
    messages:Array<MessageType>
*/
}

const App: React.FC<AppType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header />

            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile'
                           element={<Profile postData={props.store.profilePage.postData}
                                             newPostText={props.store.profilePage.newPostText}
                                      /*       ChangeNewText={props.ChangeNewText}*/
                                             dispatch={props.dispatch}
                                                        />}/>
                    <Route path='/dialogs'
                           element={<PostDialogs dialogs={props.store.dialogsPage.dialogs}
                                                 messages={props.store.dialogsPage.message}
                                                 addMesage={props.addMesage}
                                                 newMessagBody={props.store.dialogsPage.newMessagBody}
                                                 dispatch={props.dispatch}
                                                                          />}
                    />
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
