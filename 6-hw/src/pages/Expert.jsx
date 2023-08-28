import React from 'react'
import { NavLink } from 'react-router-dom'
import "./expert.css"
const Expert = () => {
  return (
    <div>
      <div className="courses">
        <button className={({isActive}) => isActive ? "ex_active" : "link" }>
          <NavLink  to="/expert/all">All</NavLink>
        </button>
        <button className={({isActive}) => isActive ? "ex_active" : "link" }>
          <NavLink to="/expert/algebra">Algebra</NavLink>
        </button>
        <button className={({isActive}) => isActive ? "ex_active" : "link" }>
          <NavLink to="/expert/arifmetic">Arithmetic</NavLink>
        </button>
        <button className={({isActive}) => isActive ? "ex_active" : "link" }>
          <NavLink  to="/expert/geometry">Geometry</NavLink>
        </button>
      </div>
    </div>
  )
}

export default Expert