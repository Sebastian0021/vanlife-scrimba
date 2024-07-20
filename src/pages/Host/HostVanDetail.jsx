// import React, { useEffect, useState } from 'react'
import { Link, useParams, NavLink, Outlet } from 'react-router-dom'
import { getDataFromStorage } from '../../utils/localStorage'

export default function HostVanDetail () {
  const { data, loading, error } = getDataFromStorage('vansFetch')

  if (loading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Error: {error.message}</h1>
  }

  const vanId = useParams().id

  const van = data?.vans.filter(van => van.id === vanId)[0] || null

  const vanElement = van
    ? (
      <div className='flex h-[158px] space-x-[20px] mb-[26px]'>
        <div className='min-h-[100px] min-w-[100px] max-h-[158px] max-w-[158px] my-auto '>
          <img className='w-full' src={van.imageUrl} alt={van.name} />
        </div>
        <div className='flex flex-col justify-center align-middle'>
          <div className={`type ${van.type} mb-[16px]`}>
            <p>{van.type}</p>
          </div>
          <h2 className='font-[700] text-[26px]'>{van.name}</h2>
          <p className='font-[500]'><strong className='font-[700] text-[20px]'>$60</strong>/day</p>
        </div>
      </div>
      )
    : null

  return (
    <section className='p-[26px]'>
      <Link to='..' relative='path'>
        <span>&larr;</span> <span className='hover:underline font-[500]'>Back to all vans</span>
      </Link>
      <div className='p-[25px] bg-white rounded-[6px] mt-[26px]'>
        {vanElement}
        <nav className='flex space-x-[26px] text-[#4D4D4D] mb-[26px]'>
          <NavLink to='.' end>
            Details
          </NavLink>
          <NavLink to='pricing' end>
            Pricing
          </NavLink>
          <NavLink to='photos' end>
            Photos
          </NavLink>
        </nav>
        <Outlet context={van} />
      </div>
    </section>
  )
}
