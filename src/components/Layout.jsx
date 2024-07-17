import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div className='flex flex-col h-[100vh] bg-[#FFF7ED]'>
      <Nav />
      <main className='bg-[#FFF7ED]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
