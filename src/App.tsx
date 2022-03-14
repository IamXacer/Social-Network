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
import {DialogsType, MessageType, PostDataType} from './redux/state';
/*import { DialogsType, MessageType,  PostDataType} from "./index";*/
/*import {PostDataType} from "./index";*/

/*export type PostDataType = {
    id: string
    message: string
    likeCount:string
}*/
export  type AppType = {
    postData:Array<PostDataType>
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}


function App(props:AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />

     <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile postData={props.Appstate.postData}/>}/>
                        <Route path='/dialogs'
                               element={<PostDialogs dialogs={props.dialogs} message={props.message}/>}
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
        </BrowserRouter>
    );
}

export default App;
