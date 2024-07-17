import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos () {
  const van = useOutletContext()
  return (
    <div className='h-[100px] w-[100px]'><img className='rounded-[5px] w-full' src={van.imageUrl} alt={van.name} /></div>
  )
}
