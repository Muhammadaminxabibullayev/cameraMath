import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"


function Nav () {
  return (
    <nav>
        <h2>Camera Math</h2>
        <ul className='menu'>
            <li className="menu_item">
                <NavLink className={({isActive}) => isActive ? "active" : "link" } to="/download">DOWNLOAD</NavLink>
            </li>
            <li className="menu_item">
                <NavLink className={({isActive}) => isActive ? "active" : "link" } to="/expert">EXPERT Q&A</NavLink>
            </li>
            <li className="menu_item">
                <NavLink className={({isActive}) => isActive ? "active" : "link" } to="/lessons">LESSONS & CALCULATORS</NavLink>
            </li>
            <li className="menu_item">
                <NavLink className={({isActive}) => isActive ? "active" : "link" } to="/premium">PREMIUM</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav