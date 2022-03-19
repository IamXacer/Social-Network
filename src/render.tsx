import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";


 export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}




