import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound () {
  return (
    <div className='p-[26px] flex flex-col h-[75vh] justify-center'>
      <h1 className='font-[700] text-[32px] mb-[30px]'>Sorry, the page you were looking for was not found.</h1>
      <Link to='.' className='w-full text-[18] font-[700] flex justify-center items-center h-[50px] text-white bg-black rounded-[5px]'>Return to home</Link>
    </div>
  )
}
