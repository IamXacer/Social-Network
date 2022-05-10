import React, {ChangeEvent} from "react";
/*import {ActionTypes,  PostDataType,  from "../../../redux/";*/
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppRootStateType, StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPost";
/*import {StoreContext} from "../../../StoreContext";*/
import {connect} from "react-redux";
import {PostDataType} from "../../../redux/state";

export  type MyPostType = {
    /*    addPost:(addPost:string)=>void*/
    /* addPostCallback:(addPost:string)=>void*/
    /*  ChangeNewTextCallback:(newText:string)=>void*/
  /*  store:StoreType*/

    /*value:(message:string | number | undefined)=>void*/

}
type mapStateToPropsType ={
    postData: Array<PostDataType>,
    newPostText:string,
}

/*export const MyPostsContainer = (props: MyPostType) => {

    return (
    <StoreContext.Consumer>
        {
        (store)=>{
           /!* let state = props.store.getState()*!/
            const addPost = () => {
                store.dispatch(addPostActionCreator())
            }


            const NewPostChangeHandler = (newText:string) => {
               store.dispatch(updateNewPostTextAC(newText))
            }
     return   <MyPosts updateNewPostText={NewPostChangeHandler}
                       addPost={addPost}

                       postData={store.getState().profilePage.postData}
                        newPostText={store.getState().profilePage.newPostText}
                       dispatch={store.dispatch}/>
    }}
     </StoreContext.Consumer>)
}*/

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