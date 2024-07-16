import React from 'react'
import { useParams } from 'react-router-dom'
import { getDataFromStorage } from '../../utils/localStorage'

export default function VanDetail () {
  const params = useParams()

  const vans = getDataFromStorage('vansArray')

  const van = vans ? vans.filter(van => van.id === params.id)[0] : undefined

  const vanElement = van
    ? (
      <div className='p-[26px]'>
        <img className='max-w-full rounded-[5px]' src={van.imageUrl} alt='' />
        <button className={`h-[34px] w-[86px] rounded-[5px] text-[#FFEAD0] font-[600] mt-[50px] ${van.type}`}>{van.type}</button>
        <h1 className='font-[700] text-[32px] mt-[20px]'>{van.name}</h1>
        <p className='font-[600] text-[24px] my-[10px]'>${van.price}<span className='font-[500] text-[14px]'>/day</span></p>
        <p>{van.description}</p>
        <button className='bg-[#FF8C38] rounded-[5px] w-full h-[50px] text-white font-[700] mt-[20px]'>Rent this van</button>
      </div>
      )
    : <p>Error...</p>

  return (
    vanElement
  )
}
