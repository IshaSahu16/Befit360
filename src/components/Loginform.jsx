import React from 'react'
import { Link } from 'react-router-dom';

const Loginform = () => {
    return (
        <div>
      <div className='circlePosition w-[150px] h-[150px] md:h-[250px] left:[30%] md:w-[300px] md:bg-[#ffde66]  bg-[#ffd15d] rounded-[100%] absolute z-1 top-[30%] md:left-[64%] translate-x-[-50%] translate-y-[-50%] blur-[50px] '>
      </div>
      <div className='circlePosition w-[600px] h-[200px] bg-[#a0a3ff] md:w-[300px] md:bg-[#9da8fd] md:h-[250px] rounded-[100%] absolute z-1 md:top-[70%] top-[65%] md:left-[35%] translate-x-[-50%] translate-y-[-50%] blur-[50px] '>
      </div>
      <div className="md:m-12 my-8 mx-4 ">

        <div className=" block p-6 max-w-sm  m-auto bg-[#fff3f3] bg-opacity-60 rounded-lg shadow border border-white border-opacity-80 backdrop-blur-xl">
          <h2 className="text-center text-2xl py-4 text-[#31319f] font-bold">Login</h2>
          <form>
            <div className="form-group mb-6">
              <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
              <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group mb-6">
              <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
              <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"      id="exampleInputPassword2"
                placeholder="Password" />
            </div>

            <button type="submit" className=" w-full px-6 py-2.5  bg-[#38389a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#4141ae]   hover:shadow-lg focus:bg-[#4141ae] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#38389a] active:shadow-lg transition duration-150   ease-in-out">Sign in</button>

            <p className="text-gray-800 mt-6 text-center">Already a member? <button
              className="hover:text-[#38389a] focus:text-[#38389a] transition duration-200 ease-in-out text-[#38389a]"><Link to="/Signup">Login</Link></button>
            </p>
          </form>
        </div>

      </div>
    </div>
    )
}

export default Loginform
