import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import lock from '../assets/lock.svg'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full h-[50px] md:h-[77px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <div><Link to="/">
          <img src={logo} className='md:h-[3.4rem] h-[2.25rem] mx-3' />
          </Link>
        </div>
        <div className='hidden md:flex items-center'>
          <ul className='flex gap-11'>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/Fooddiary">Food Diary</Link></li> */}
            <li><Link to="/Faq">FAQ's</Link></li>
            <li><Link to="/Bmi">BMI Calculator</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'><img src={lock} /><Link to="/Login">Login</Link></button>
          <button className='px-8 py-3 rounded-md bg-[#FFB703] text-white font-semibold mr-3'><Link to="/Signup">Sign Up For Free</Link></button>
        </div>

        <div className='md:hidden mx-3' onClick={handleClick}>
          <img src={toggle ? close : hamburger} />
        </div>
      </div>

      <div className={toggle ? 'absolute -10 p-4 bg-white w-full md:hidden' : 'hidden'}>
        <ul>
          <li className='p-4 hover:bg-gray-100 text-sm'><Link to="/">Home</Link></li>
          {/* <li className='p-4 hover:bg-gray-100 text-sm'><Link to="/Fooddiary">Food Diary</Link></li> */}
          <li className='p-4 hover:bg-gray-100 text-sm'><Link to="/Faq">FAQ's</Link></li>
          {/* <li className='p-4 hover:bg-gray-100 text-sm'>FAQ's</li> */}
          <li className='p-4 hover:bg-gray-100 text-sm'><Link to="/Bmi">BMI Calculator</Link></li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[#ffe39d] flex justify-center items-center bg-transparent px-6 gap-2 text-sm py-2 rounded-md'><img src={lock} /><Link to="/Login">Login</Link></button>
            <button className='px-8 py-3 rounded-md bg-[#FFB703] text-white font-bold text-sm'><Link to="/Login">Sign Up For Free</Link></button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
