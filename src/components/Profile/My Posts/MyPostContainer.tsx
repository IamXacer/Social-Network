import React, {ChangeEvent} from "react";
/*import {ActionTypes,  PostDataType,  from "../../../redux/";*/
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppRootStateType, StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPost";
/*import {StoreContext} from "../../../StoreContext";*/
import {connect} from "react-redux";
import {PostDataType} from "../../../redux/state";


type mapStateToPropsType ={
    postData: Array<PostDataType>,
    newPostText:string,
}


let mapStateToProps = (state:AppRootStateType) :mapStateToPropsType=> {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,

        }
    }

let mapDispatchToProps= (dispatch:any) =>{
    return {
        updateNewPostText: (newText:string) =>{
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        },
        dispatch:dispatch
    }

}

export const SuperMyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)