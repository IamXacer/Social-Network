import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {mapStateToPropsType} from "../Users/UsersContainer";
/*import { withRouter } from "react-router-dom";*/
import {useParams} from 'react-router-dom';
import {RouteComponentProps} from "@reach/router";


type PathParamsType = {
    userId: string
    newText:string
}
type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsTpe = {
    setUserProfileAC: (profile: any) => void
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

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        console.log(userId)
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}

                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({

    profile: state.profilePage.profile
})
let withUrlDaContainerComponentwith = withRouter(ProfileContainer)

/*const TakeParams = (props:any) => {
    return <ProfileContainer {...props} param={useParams()} />
}*/
export default connect(mapStateToProps, {setUserProfileAC,updateNewPostTextAC})(withUrlDaContainerComponentwith)