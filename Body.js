import React from 'react'
import Sidebar from './Sidebar'
import MainContainner from './MainContainner'
import { Outlet } from 'react-router-dom'

const Body = () => {

    
  return (
    <div className='flex'>

    <Sidebar/>
    <Outlet/>

    </div>
   
  )
}

export default Body