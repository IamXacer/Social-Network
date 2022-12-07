import React from "react";
import {Header} from "./Header";
import { connect } from "react-redux";
import {HeaderThunk, InitialStateType, setUserDataAC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {LoginAPI, } from "../../Api/api";

type MapStatePropsType = {

    login:any,
    isAuth:boolean

}
type MapDispatchPropsType ={
    HeaderThunk:(userId: null,
                 email:null,
                 login:any,
                 isAuth:boolean)=>void
}

/*export type mapStateToPropsType = InitialStateType*/
export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

class  HeaderContainer extends React.Component<any, HeaderPropsType>{
    componentDidMount() {

        this.props.HeaderThunk()
    /*    LoginAPI.me().then(response => {
                 if(response.data.resultCode === 0){
                 let {id,login,email} =response.data.data
                 this.props.setUserDataAC(id,email,login)

             }
        })*/
    }

    render() {
        return <Header isAuth={this.props.isAuth}login={this.props.login}/>}
    }

    const mapStateToProps = (state:AppRootStateType):MapStatePropsType =>({

        isAuth:state.auth.isAuth,
        login:state.auth.login,

    })
    export default connect(mapStateToProps,
        {HeaderThunk})
    (HeaderContainer)