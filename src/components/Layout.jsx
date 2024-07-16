import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <>
      <Nav />
      <main className='bg-[#FFF7ED]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
