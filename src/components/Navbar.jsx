import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import lock from '../assets/lock.svg'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full h-[50px] md:h-[77px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} className='md:h-[3.4rem] h-[2.25rem] mx-3' />
        <div className='hidden md:flex items-center'>
          <ul className='flex gap-11'>
            <li>Home</li>
            <li>Food Diary</li>
            <li>Exercises</li>
            <li>FAQ's</li>
            <li>BMI Calculator</li>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'><img src={lock} />Login</button>
          <button className='px-8 py-3 rounded-md bg-[#FFB703] text-white font-semibold mr-3'>Sign Up For Free</button>
        </div>

        <div className='md:hidden mx-3' onClick={handleClick}>
          <img src={toggle ? close : hamburger} />
        </div>
      </div>

      <div className={toggle ? 'absolute -10 p-4 bg-white w-full md:hidden' : 'hidden'}>
        <ul>
          <li className='p-4 hover:bg-gray-100 text-sm'>Home</li>
          <li className='p-4 hover:bg-gray-100 text-sm'>Food Diary</li>
          <li className='p-4 hover:bg-gray-100 text-sm'>Exercises</li>
          <li className='p-4 hover:bg-gray-100 text-sm'>FAQ's</li>
          <li className='p-4 hover:bg-gray-100 text-sm'>BMI Calculator</li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[#ffe39d] flex justify-center items-center bg-transparent px-6 gap-2 text-sm py-2 rounded-md'><img src={lock} />Login</button>
            <button className='px-8 py-3 rounded-md bg-[#FFB703] text-white font-bold text-sm'>Sign Up For Free</button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
