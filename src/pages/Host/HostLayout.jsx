import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout () {
  return (
    <>
      <nav className='flex justify-around'>
        <NavLink to='/host' end>Dashboard</NavLink>
        <NavLink to='/host/income'>Income</NavLink>
        <NavLink to='/host/vans'>Vans</NavLink>
        <NavLink to='/host/reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
