import React from 'react'
import heroSectionBG from './bg3.jpg'
import { Link, NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='overflow-scroll w-full h-fit relative cursor-default'>
      <img style={{ filter: 'brightness(40%)' }} className='w-full relative' src={heroSectionBG} />
      {/* title */}
      <h1 className='text-white text-6xl absolute top-20 right-60'>Compute smarter, earn stronger!</h1>
      {/* describe */}
      <h3 className='text-white absolute top-40 left-60 mt-10 text-2xl'>Optimized mining performance designed for those who demand more.</h3>
      {/* this Link should be linked to login/register page */}
      <span className='w-40 h-12 rounded-full bg-white absolute top-80 mt-20 left-1/3'>
        <NavLink className='relative top-3.5 left-1/4 text-[20px] text-black' to={'/register'} > Get Started </NavLink>
      </span>
      {/* this Link will be linked to monitoring page */}
      <span className='w-40 h-12 rounded-full bg-blue-600 absolute top-80 mt-20 right-1/3'>
        <NavLink className='relative left-8 top-3.5 text-white text-[20px]' to={'/blog'}> Go monitoring </NavLink>
      </span>
    </div>
  )
}

export default HeroSection