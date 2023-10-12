import React from 'react'
import user1 from '../assets/user1.svg'
import comma from '../assets/comma.svg'

const Testimonial = () => {
    return (
        <div className="md:w-full bg-white pt-8 pb-12 md:pb-20 md:ml-[7rem] md:pr-[9rem]  px-4">
            <div className="container mx-auto  ">
                <h2 className="text-3xl font-semibold text-[#2a2a8d] mb-4 md:text-4xl md:pb-4">What our clients say about us!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
                    <div className=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div className="flex items-center mb-4">
                            <img src={user1} alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-gray-800 font-semibold">John Doe</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            "I absolutely love this product! It has made my life so much easier. Highly recommended."
                        </p>
                        <p className="text-gray-500">CEO, ABC Company</p>
                    </div>
                    <div className=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div className="flex items-center mb-4">
                            <img src={user1} alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-gray-800 font-semibold">John Doe</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            "Your team's technical expertise has been invaluable. You've taken it to the next level."
                        </p>
                        <p className="text-gray-500">NonProfit Founder</p>
                    </div>
                    <div className=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div className="flex items-center mb-4">
                            <img src={user1} alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-gray-800 font-semibold">John Doe</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9733;</span>
                                    <span className="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            "Exceptional! Your strategies have boosted our conversion rates, and our business is thriving."
                        </p>
                        <p className="text-gray-500">Blogger & Influencer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
