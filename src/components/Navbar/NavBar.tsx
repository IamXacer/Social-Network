import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
  return(
      <nav className={s.nav}>
          <div className={s.item}  >

              <NavLink to='/profile' className={s.activeLink} >Profile</NavLink>
          </div>
          <div className={`${s.item} ${s.active}`}>
              <NavLink to='/dialsaaogs' className={s.activeLink}  >Message</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/users' className={s.active} >Users</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/news' className={s.active} >News</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/music' className={s.active} >Mysic</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/settings' className={s.active} >Settings</NavLink>
          </div>

      </nav>
  )
}











