import React from 'react'
import check from '../assets/check.svg'
import { Link } from 'react-router-dom';

const Workflow = () => {
    return (
        <div className='w-full bg-white pt-20 md:py-[3.2rem] ml-0 md:ml-28 md:grid md:grid-cols-2'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <div className='flex flex-col justify-start gap-[5px]'>
                    <h1 className='md:leading-[55px] md:text-[2.5rem] text-[2rem] font-semibold leading-[2.9rem]'>Achieve Your <span className='text-[#FFB703]'>Fitness Goals</span><br /> With Ease</h1>
                    <p className='pt-1 pb-4 md:pb-8 mr-18 text:base md:text-lg text-gray-600'>Track your progress, set goals, and achieve your fitness targets with our advanced fitness tracking website.</p>
                    <div className='flex'>
                        <button className='px-4 py-3 rounded-md bg-[#2b2bb1] text-white text-sm md:text-[14px] font-semibold mr-3'><Link to="/Login">Get Started </Link></button>
                    </div>
                </div>
            </div>

            <section className="w-full md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0 pt-7 md:pt-0 md:mb-18">
                <div>
                    <ul>
                        <li className="relative flex items-baseline gap-6 pb-5">
                            <div className='flex '>
                                <div>
                                    <img src={check} className='mt-1 w-8'/>
                                </div>
                                <div className='ml-3'>
                                    <p className="text-lg text-[#ffb703] font-semibold md:text-2xl">Stay Motivated</p>
                                    <p className=" text-normal text-base text-[#5e5e5e] md:text-lg mt-2">Discover inspirational content, quotes to keep you motivated.</p>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex items-baseline gap-6 pb-5">
                            <div className='flex '>
                                <div>
                                    <img src={check} className='mt-1 w-8'/>
                                </div>
                                <div className='ml-3'>
                                    <p className="text-lg text-[#ffb703] font-semibold md:text-2xl">Stay Motivated</p>
                                    <p className=" text-normal text-base text-[#5e5e5e] md:text-lg mt-2">Discover inspirational content, quotes to keep you motivated.</p>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex items-baseline gap-6 pb-5">
                            <div className='flex '>
                                <div>
                                    <img src={check} className='mt-1 w-8'/>
                                </div>
                                <div className='ml-3'>
                                    <p className="text-lg text-[#ffb703] font-semibold md:text-2xl">Stay Motivated</p>
                                    <p className=" text-normal text-base text-[#5e5e5e] md:text-lg mt-2">Discover inspirational content, quotes to keep you motivated.</p>
                                </div>
                            </div>
                        </li>                        
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Workflow
