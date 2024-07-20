import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo () {
  const van = useOutletContext()
  return van
    ? (
      <div className='flex flex-col space-y-[15px]'>
        <p><strong>Name:</strong> {van.name}</p>
        <p><strong>Category:</strong> {van.type}</p>
        <p><strong>Description:</strong> {van.description}</p>
        <p><strong>Visibility:</strong> Public</p>
      </div>
      )
    : null
}
