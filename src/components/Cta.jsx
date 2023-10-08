import React from 'react'
import cta from '../assets/cta.svg'

const Cta = () => {
    return (
        <div className='w-full bg-[#f6f8ff] py-10 '>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-4 md:gap-8 max-w-[600px] items-center  px-4 md:px-0'>

                <img src={cta} className="w-[500px] mx-auto" />


                <div>
                    <h1 className=' text-xl font-medium md:py-2  md:text-3xl md:font-semibold'>Step into a World of <span className='text-[#ffb703]'>Fitness </span>& <span className='text-[#ffb703]'>Well Being! </span>  </h1>
                    <p className='py-3 text-base md:text-lg text-gray-600'>Your Journey to a Better, Healthier You!</p>
                    <button className='max-[780px]:w-full my-4 px-5 py-1 md:py-3 rounded-md bg-[#3434cb] text-white text-base font:semibold md:font-bold'>Sign Up For Free</button>
                </div>
            </div>
        </div>

    )
}

export default Cta
