import './index.css';
import reportWebVitals from './reportWebVitals';
import { store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";
/*import {StoreContext} from "./StoreContext";*/
import Provider from 'react-redux/es/components/Provider';





/*export const rerenderEntireTree = () => {*/

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
/*}
rerenderEntireTree()*/

/*store.subscribe(rerenderEntireTree)*/
/*Store.subscribe(()=>{
    let state = Store.getState()
    rerenderEntireTree(state)
    }
)*/


/*appState={state}*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
