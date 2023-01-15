import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to="/login"> Dashboard </Link></li>
            <li><Link to="/admin"> Admin Panel </Link></li>
            <li><Link to="/"> Logout </Link></li>
        </ul>
    </div>
  )
}

export default Nav