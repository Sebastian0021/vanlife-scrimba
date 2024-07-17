import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing () {
  const van = useOutletContext()
  return (
    <div>
      <p className='font-[500] text-[24px]'>${van.price}<span className='text-[#4D4D4D] text-[16px] font-[500]'>/day</span></p>
    </div>
  )
}
