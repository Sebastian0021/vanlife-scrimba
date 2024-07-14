import React from 'react'
import aboutImg from '../assets/img-home.png'

export const About = () => {
  return (
    <main className='bg-[#FFF7ED]'>
      <img className='w-[100%]' src={aboutImg} alt='' />
      <div className='px-[26px] py-[50px]'>
        <h2 className='font-[700] text-[32px] mb-[30px]'>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p className='font-[500] mb-[16px]'>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
        </p>
        <p className='font-[500] mb-[55px]'>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className='bg-[#FFCC8D] px-[37px] py-[32px] rounded-[5px]'>
          <p className='font-[700] text-[24px] mb-[25px]'>
            Your destination is waiting.
            <br />Your van is ready.
          </p>
          <button className='bg-[#161616] h-[49px] w-[174px] text-white rounded-[10px]'>Explore our vans</button>
        </div>
      </div>

    </main>
  )
}
