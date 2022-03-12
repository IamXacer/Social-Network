import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/Navbar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteComponentProps} from '@reach/router';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";


export  type AppType = {

}

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
     <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile />}/>
                        <Route path='/dialogs'
                               element={<Dialogs />}/>
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
