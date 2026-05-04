import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

const Layout = () => {
  return (
    <div>
        <Outlet/>
      </div>
  )
}

export default Layout