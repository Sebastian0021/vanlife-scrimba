import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <header className='min-h-[110px] bg-[#FFF7ED] px-[26px] flex justify-between items-center'>
      <Link to='/' className=' font-[800] text-[26px]'>#VANLIFE</Link>

      <nav className='flex space-x-[20px]'>
        <NavLink to='/host'>Host</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/vans'>Vans</NavLink>
      </nav>
    </header>
  )
}
