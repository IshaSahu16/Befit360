import React from 'react'
import whyusfood from '../assets/whyusfood.svg'
import whyusexer from '../assets/whyusexer.svg'
import whyusmot from '../assets/whyusmot.svg'
import whyusbanner from '../assets/whyusbanner.svg'

const Whyus = () => {
    return (
        <div className='md:max-w-[1480px] mb-3 m-auto grid md:grid-cols-2 max-w-[600px] gap-1 px-4 md:px-0 py-8 '>

            <img src={whyusbanner} className="max-[768px]:hidden md:order-first md:ml-[6rem] rounded-xl md:w-[60%]" />

            <div className="w-full h-96 py-7 md:py-0 max-w-[600px] m-auto flex-col justify-start items-start inline-flex md:mr-[7rem] md:pt-0">
                <div className=" text-[#2929ab] text-2xl font-bold mb-1 md:mt-[-2.5rem]">Why Choose Us?</div>
                <div className="self-stretch  text-gray-600 text-base mb-2 ">Our app provides a seamless experience for tracking your fitness progress</div>
                <div className="self-stretch h-96 py-3.5 flex-col justify-center items-center gap-5 md:gap-7 flex">
                    <div className="self-stretch justify-start items-center gap-7 inline-flex">
                        <div className="grow shrink basis-0 h-24 mt-2 md:h-24 px-2 pt-2 rounded-md border border-[#e0dada] justify-center items-start gap-2 flex">
                            <div className="w-22 h-22 justify-start items-start flex">
                                <img src={whyusfood} className='w-16 h-16 pt-2' />
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-[#FFB800] text-lg font-semibold">Food Diary</div>
                                <div className="self-stretch text-gray-600 text-[13px] font-normal">Log your meals and track your nutrition intake to maintain a healthy diet</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-7 inline-flex">
                        <div className="grow shrink basis-0 h-24 px-2 pt-2 rounded-md border border-[#e0dada] justify-center items-start gap-2 flex">
                            <div className="w-22 h-22 justify-start items-start flex">
                                <img src={whyusexer} className='w-16 h-16 pt-2' />
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-[#FFB800] text-lg font-semibold"> Exercises & Workouts</div>
                                <div className="self-stretch text-gray-600 text-[13px] font-normal">Create personalized workout plans that suit your fitness level and goals</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-7 inline-flex">
                        <div className="grow shrink basis-0 h-24 md:h-24 px-2 pt-2 rounded-md border border-[#e0dada] justify-center items-start gap-2 flex">
                            <div className="w-22 h-22 justify-start items-start flex">
                                <img src={whyusmot} className='w-16 h-16 pt-2' />
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                <div className="self-stretch text-[#FFB800] text-lg font-semibold">Stay Motivated</div>
                                <div className="self-stretch text-gray-600 text-[13px] font-normal">Discover Inspirational content, quotes, images to keep you motivated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus
