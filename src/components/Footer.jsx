import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='w-full bg-white py-8 md:pt-12 px-4 md:px-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-4 max-w-[600px] md:px-4 '>

                <div className='col-span-2 py-1'>
                    <img src={logo} className="h-[45px] mb-3" />
                    <h3 className='text-2xl font-semibold md:mt-10'>Contact Us</h3>
                    <h3 className='py-2 text-[#3f3f3f] '>Call : +123 300 123</h3>
                    <h3 className='md:py-2 text-[#3f3f3f]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold'>Explore</h3>
                    <ul className='md:py-6 text-[#6D737A]'>
                        <li className='py-[7px] md:py-2'>Home</li>
                        <li className='py-[7px] md:py-2'>Food Diary</li>
                        <li className='py-[7px] md:py-2'>Exercises</li>
                        <li className='py-[7px] md:py-2'>FAQ's</li>
                        <li className='py-[7px] md:py-2'>BMI Calculator</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold'>Category</h3>
                    <ul className='md:py-6 text-[#6D737A]'>
                        <li className='py-[7px] md:py-2'>Manage Diet</li>
                        <li className='py-[7px] md:py-2'>Record Workout</li>
                        <li className='py-[7px] md:py-2'>Record Meals</li>
                    </ul>
                </div>

                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-2xl font-semibold'>Subscribe</h3>
                    <h3 className='md:py-3 text-[#3f3f3f]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                    <form className='py-4'>
                        <input className='bg-[#f2f2f2] p-3 w-full rounded'placeholder='Email here'/>
                        <button className='max-[780px]:w-full my-4 px-3 py-3 md:px-5 rounded-md bg-[#2929ab] text-white font-medium'>Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className='px-1 text-center text-base md:pt-2'>
                <h3 className='text-base'>&#169; 2023 <span className='text-[#FFB703] font-normal'>Designed & Developed</span> With ❤️ By <span className='text-[#FFB703] font-normal'>Isha Sahu</span></h3>
            </div>
        </div>
    )
}

export default Footer


