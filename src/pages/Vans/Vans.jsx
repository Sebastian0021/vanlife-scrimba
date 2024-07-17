import { Link } from 'react-router-dom'
import { getDataFromStorage } from '../../utils/localStorage'
export const Vans = () => {
  const vans = getDataFromStorage('vansArray')

  const vanElemnts = vans
    ? vans.map(van => (
      <div key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <div className=' flex'>
            <img className='min-h-full min-w-full rounded-[5px]' src={van.imageUrl} alt='' />
          </div>
          <div className='flex justify-between mt-[10px]'>
            <div className='flex flex-col justify-between'>
              <p className='font-[600] text-[20px]'>{van.name}</p>
              <button className={`h-[34px] w-[86px] rounded-[5px] text-[#FFEAD0] font-[600] mt-[10px] ${van.type}`}>{van.type}</button>
            </div>
            <div className='pl-[5px]'>
              <p className='font-[600] text-[20px]'>${van.price}</p>
              <p className='font-[500] text-[10px]'>/day</p>
            </div>
          </div>
        </Link>
      </div>
    )
    )
    : <p>Loading...</p>

  return (
    <div className='grid grid-cols-2 p-[26px] w-full gap-y-[20px] gap-x-[26px]'>
      {vanElemnts}
    </div>
  )
}
