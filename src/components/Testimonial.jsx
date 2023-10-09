import React from 'react'
import user1 from '../assets/user1.svg'
import comma from '../assets/comma.svg'

const Testimonial = () => {
    return (
        <div class="md:w-full bg-white pt-8 pb-12 md:pb-20 md:ml-[-24px]">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-semibold text-[#2a2a8d] mb-4 md:text-4xl md:pb-4">What our clients say about us!</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
                    <div class=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div class="flex items-center mb-4">
                            <img src={user1} alt="John Doe" class="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p class="text-gray-800 font-semibold">John Doe</p>
                                <div class="flex items-center">
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "I absolutely love this product! It has made my life so much easier. Highly recommended."
                        </p>
                        <p class="text-gray-500">CEO, ABC Company</p>
                    </div>
                    <div class=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div class="flex items-center mb-4">
                            <img src={user1} alt="John Doe" class="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p class="text-gray-800 font-semibold">John Doe</p>
                                <div class="flex items-center">
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "I absolutely love this product! It has made my life so much easier. Highly recommended."
                        </p>
                        <p class="text-gray-500">CEO, ABC Company</p>
                    </div>
                    <div class=" rounded-lg p-6 shadow-md bg-[#fffefc] border border-gray-100">
                        <img src={comma} className='h-12 float-right' />
                        <div class="flex items-center mb-4">
                            <img src={user1} alt="John Doe" class="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p class="text-gray-800 font-semibold">John Doe</p>
                                <div class="flex items-center">
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9733;</span>
                                    <span class="text-yellow-500 text-lg">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "I absolutely love this product! It has made my life so much easier. Highly recommended."
                        </p>
                        <p class="text-gray-500">CEO, ABC Company</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
