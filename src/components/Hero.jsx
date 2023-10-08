import React from 'react'
import heromobimg from '../assets/heroimg.svg'
import lock from '../assets/lock.svg'

const Hero = () => {
  return (
    <div className='w-full bg-white py-5 md:py-[3.2rem] ml-0 md:ml-24'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
        <div className='flex flex-col justify-start gap-[5px]'>
          <p className='py-2 md:text-2xl text-[#2929ab] font-bold'>CHASE YOUR FITNESS WINS</p>
          <h1 className='md:leading-[72px] md:text-6xl text-4xl font-semibold'>Discover the <br /><span className='text-[#FFB703]'>Power of Fitness </span> in Your Enriched Life!</h1>
          <p className='pt-5 pb-4 md:pb-8 mr-18 text:base md:text-lg text-gray-600'>Track your progress, set goals, and achieve your fitness targets with our advanced fitness tracking website.</p>
          <div className='flex'>
            <button className='flex justify-between items-center bg-transparent px-6 gap-2 mr-5 rounded-md border border-[#2929ab]'><img src={lock} />Login</button>
            <button className='px-8 py-3 rounded-md bg-[#2929ab] text-white text-sm md:text-[14px] font-semibold mr-3'>Sign Up For Free</button>
          </div>
        </div>
  
        <div className='circlePosition w-[350px] h-[150px] left:[20%] md:w-[600px] md:h-[180px] bg-[#ffedc1] rounded-[100%] absolute z-1 top-[35%] md:left-[45%] translate-x-[-50%] translate-y-[-50%] blur-[170px] '>
        </div>
        <div className='circlePosition w-[600px] h-[200px] bg-[#c7c9ff] rounded-[100%] absolute z-1 top-[85%] left-[8%] translate-x-[-50%] translate-y-[-50%] blur-[170px] '>
        </div>

        <img src={heromobimg} className="md:order-last md:h-22 md:ml-6 mt-6"/>
      </div>
    </div>
  )
}

export default Hero
