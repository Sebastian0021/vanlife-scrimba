import { Link, useSearchParams } from 'react-router-dom'
import { getDataFromStorage } from '../../utils/localStorage'
export const Vans = () => {
  const vans = getDataFromStorage('vansArray')

  const [serchParam, setSearchParams] = useSearchParams()

  const typleFilter = serchParam.get('type')

  const displayedVans = typleFilter ? vans.filter(van => van.type === typleFilter) : vans

  const vanElemnts = displayedVans.map(van => (
    <div key={van.id}>
      <Link to={van.id} state={{ search: serchParam.toString() }}>
        <div className=' flex'>
          <img className='min-h-full min-w-full rounded-[5px]' src={van.imageUrl} alt='' />
        </div>
        <div className='flex justify-between mt-[10px]'>
          <div className='flex flex-col justify-between'>
            <p className='font-[600] text-[20px]'>{van.name}</p>
            <div className={`type ${van.type} mt-[10px]`}>{van.type}</div>
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

  return (
    <div className='p-[26px]'>
      <h1 className='text-[32px] font-[700] mb-[20px]'>Explore our van options</h1>
      <div className='flex space-x-[20px] mb-[50px] items-center'>
        <button onClick={() => { setSearchParams({ type: 'simple' }) }} className={`type bg-[#FFEAD0] hover:text-[#FFEAD0]  hover:bg-simple ${typleFilter === 'simple' ? 'simple' : ''}`}>simple</button>
        <button onClick={() => { setSearchParams({ type: 'luxury' }) }} className={`type bg-[#FFEAD0] hover:text-[#FFEAD0]  hover:bg-luxury ${typleFilter === 'luxury' ? 'luxury' : ''}`}>luxury</button>
        <button onClick={() => { setSearchParams({ type: 'rugged' }) }} className={`type bg-[#FFEAD0] hover:text-[#FFEAD0]  hover:bg-rugged ${typleFilter === 'rugged' ? 'rugged' : ''}`}>rugged</button>
        {typleFilter && <button onClick={() => { setSearchParams({}) }} className='underline hover:font-[600]'>Clear filters</button>}
      </div>
      <div className='grid grid-cols-2 w-full gap-y-[20px] gap-x-[26px]'>
        {vanElemnts}
      </div>
    </div>
  )
}
