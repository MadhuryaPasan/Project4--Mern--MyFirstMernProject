import React from 'react'
import NavBar from './NavBar'
import {Outlet} from 'react-router-dom'

//outlet is a placeholder for nested routes
//nested routes are defined in the parent route
//example: /create-blog is a nested route of /blog
//the parent route is /blog
//here, the parent route is /, so the nested routes are /create-blog, /read-blog, and /about
//so the outlet is a placeholder for these nested routes

const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default Layout