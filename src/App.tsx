import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/Navbar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Navigate, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";

import {SuperPostDialigContainer} from './components/Dialogs/PostDialogsContainer';
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainet";
import {Login} from "./components/common/Login/Login";



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
            <HeaderContainer />

            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'}>
                        <Route index element={<ProfileContainer /*store={props.store} *//>}/>
                        <Route path=':userId'
                               element={<ProfileContainer /*store={props.store} *//>}/>
                    </Route>

                    <Route path='/dialsaaogs'
                           element={<SuperPostDialigContainer   />}
                    />
                    <Route path='/users'
                           element={<UsersContainer  />}
                    />
                    <Route path='/login'
                           element={<Login/>}
                    />
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

/*

function hello =()=>{
    alert('hello')
}

<script>
    function removeWhitespaces(string) {
    string.split(' ').filter(s => s !== '').join('_')
}

    console.log(removeWhitespaces('you are JS developer'))
</script>*/
