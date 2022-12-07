import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import { getUserProfileThunk, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Navigate, useParams} from 'react-router-dom';
import {RouteComponentProps} from "@reach/router";



type PathParamsType = {
    userId: string
    newText:string
}
type MapStatePropsType = {
    profile: any
    isAuth:boolean

}
type MapDispatchPropsTpe = {
    setUserProfileAC: (profile: any) => void
    getUserProfileThuck: (userId: string) => void
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = MapStatePropsType & MapDispatchPropsTpe

export function withRouter(Children: any) {
    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<any, PropsType> {
    componentDidMount() {
/*this.props.profileThunk(this.props.userId)*/
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunk(userId)
/*userAPI.GetProfile(userId).then(response => {
                this.props.setUserProfileAC(response.data)
            })*/
    }

    render() {
        if( !this.props.isAuth ) return <Navigate  to={'/profile'}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})
let withUrlDaContainerComponentwith = withRouter(ProfileContainer)

/*const TakeParams = (props:any) => {
    return <ProfileContainer {...props} param={useParams()} />
}*/
export default connect(mapStateToProps, {getUserProfileThunk,updateNewPostTextAC})(withUrlDaContainerComponentwith)