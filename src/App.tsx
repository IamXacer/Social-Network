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
import {AppRootStateType, StoreType} from "./redux/redux-store";
import { ActionTypes } from './redux/state';
import { SuperPostDialigContainer } from './components/Dialogs/PostDialogsContainer';
/*import {PostDialogsContainer} from "./components/Dialogs/PostDialogsContainer";*/
/*import { DialogsType, MessageType,  PostDataType} from "./index";*/
/*import {PostDataType} from "./index";*/


export type AppType = {
   /* state: AppRootStateType*/
     // addPost:()=>void
  /*      ChangeNewText:(newText:string)=>void*/
  /*  dispatch: (action: ActionTypes) => void*/
 /*   store: StoreType*/

    /*   dialogs:Array<DialogsType>
       messages:Array<MessageType>
   */ }

const App: React.FC<AppType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header />

            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile'
                           element={<Profile /*store={props.store} *//>}/>
                    <Route path='/dialogs'
                           element={<SuperPostDialigContainer   />}
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
