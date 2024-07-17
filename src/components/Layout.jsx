import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div className='flex flex-col h-[100vh] bg-[#FFF7ED]'>
      <Header />
      <main className='bg-[#FFF7ED]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
