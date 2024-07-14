import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <header className='h-[110px] bg-[#FFF7ED] px-[26px] flex justify-between items-center'>
      <Link to='/' className=' font-[800] text-[26px]'>#VANLIFE</Link>

      <nav className='w-[117px] flex justify-between'>
        <Link to='/vans'>Vans</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  )
}
