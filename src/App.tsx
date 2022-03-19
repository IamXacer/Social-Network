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
    addMesage,
    addPost,
    dialogsPageType,
    DialogsType,
    MessageType,
    PostDataType,
    profilePageType,
    state,
    stateType
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
    appState: stateType
    addPost:(addPost:string)=>void
}

function App(props:AppType) {

    return (

            <div className="app-wrapper">
                <Header />

     <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile postData={props.appState.profilePage.postData}
                                                 newPostText={props.appState.profilePage.newPostText}
                                                 addPost={addPost}/>}/>
                        <Route path='/dialogs'
                               element={<PostDialogs dialogs={props.appState.dialogsPage.dialogs}
                                                     message={props.appState.dialogsPage.message}addMesage={addMesage}/>}
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
