import './index.css';
import reportWebVitals from './reportWebVitals';
import { Store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,  stateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";




export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App  state={Store.getState()}
                  /*   appState={Store._state}*/
                      dispatch={Store.dispatch.bind(Store)}
                /*      ChangeNewText={Store.updateNewPostTexts.bind(Store)}*/
                      addMesage={Store.addMesage.bind(Store)}
                />
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

Store.subscribe(rerenderEntireTree)


/*appState={state}*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
