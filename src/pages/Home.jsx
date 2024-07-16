import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='text-white bg-[url("/src/assets/bg-about.png")] bg-cover px-[26px] py-[65px]'>
      <div className='h-[256px] flex flex-col justify-between'>
        <h1 className='font-[800] text-[36px]'>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to='/vans' className='text-white w-full bg-[#FF8C38] rounded-[5px] h-[50px] font-[700] flex justify-center items-center'>Find your van</Link>
      </div>
    </div>
  )
}
