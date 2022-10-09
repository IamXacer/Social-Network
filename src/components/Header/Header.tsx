import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


export type HeaderType = {
    isAuth:boolean
    login:null

}

export const Header = (props:HeaderType) => {
  return(
      <header className={classes.header}>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXa1TjBQm-lNxTHJDmdUVMD7J2BE0zNwGGQw&usqp=CAU'}/>
          <div className={classes.loginBlock}>
              {props.isAuth ? props.login
              :<NavLink to={'/login'}>Login</NavLink>}

          </div>

      </header>
  )
}