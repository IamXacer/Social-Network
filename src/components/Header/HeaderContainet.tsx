import React from "react";
import {Header} from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {authReducer, InitialStateType, setUserDataAC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {LoginMe} from "../../Api/api";

type MapStatePropsType = {
/*    userId: any,
    email:any*/
    login:any
    isAuth:boolean
}
export type mapStateToPropsType = InitialStateType
export type HeaderPropsType = mapStateToPropsType & MapStatePropsType
class  HeaderContainer extends React.Component<any, HeaderPropsType>{
    componentDidMount() {
        LoginMe().then(data => {
                debugger
                             if(data.resultCode === 0){
                 let {id,login,email} = data.data
                 this.props.setUserDataAC(id,email,login)
             }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth}login={this.props.login}/>}
    }

    const mapStateToProps = (state:AppRootStateType):MapStatePropsType =>({

        isAuth:state.auth.isAuth,
        login:state.auth.login,

    })
    export default connect (mapStateToProps,{setUserDataAC}) (HeaderContainer)