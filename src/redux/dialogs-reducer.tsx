import {ActionTypes,} from "./state";


let initialState ={
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
}

  export const DialogsReducer = (state=initialState,action:ActionTypes) => {

    switch (action.type){
        case 'UPDATE-NEW-MESAGE-BODY':
             state.newMessagBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessagBody
            state.newMessagBody = ''
            state.message.push({id:'6',message:body})
            return state
        default :return state
    }
}

export const updateNewMessageBodyAC = (body:string)=> {
    return {
        type: 'UPDATE-NEW-MESAGE-BODY',body:  body
    } as const
}
export const sendNewMessageAC = ()=> {
    return {type: 'SEND-MESSAGE'} as const
}
