import React from 'react'
import { getDataFromStorage } from '../../utils/localStorage'
import { Link } from 'react-router-dom'

export default function HostVans () {
  const { data, loading, error } = getDataFromStorage('vansFetch')

  const hostId = '123'
  const userVans = data?.vans.filter(van => van.hostId === hostId) || []

  if (loading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Error: {error.message}</h1>
  }

  const vansElement = userVans.length !== 0
    ? userVans.map(van => (
      <div key={van.id}>
        <Link to={van.id}>
          <div className='h-[102px] w-full bg-white py-[18px] px-[24px] mt-[15px] flex rounded-[6px]'>
            <img src={van.imageUrl} className='h-full mr-[26px] rounded-[5px]' alt='' />
            <div className='flex flex-col justify-center'>
              <h3 className='font-[600] text-[20px]'>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      </div>
    ))
    : null

  return (
    <div className='p-[26px]'>
      <h2 className='font-[700] text-[32px]'>Your listed vans</h2>
      <div>
        {vansElement || <p>There is no vans</p>}
      </div>
    </div>
  )
}
