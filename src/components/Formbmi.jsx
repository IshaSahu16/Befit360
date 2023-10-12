import React, {useState} from 'react'
import bmibanner from '../assets/bmibanner.svg'

const Formbmi = () => {
  
  // Setting Variables 
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  // Function for calculating bmi of individual
  let calcBmi = (event) => {

    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
  
  // Reload Function
  let reload = () => {
    window.location.reload()
  }

  return (

    <div className='w-full px-4 bg-[#fffcf4] pt-6 pb-9 md:py-14 md:flex'>
        <div className='md:px-24  md:max-w-[700px] md:basis-1/2'> 
            <h1 className='md:leading-[72px] md:text-5xl text-3xl md:text-[2.5rem] font-semibold text-[#262682]'>BMI Calculator</h1>
            <p className='pt-2 md:pt-0 pb-4 md:pb-6 mr-18 text-[1.1rem] font-normal md:text-lg text-[#5a5a5a]'>Enter your age and weight to calculate BMI</p>

            <form onSubmit={calcBmi}>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-normal font-medium text-[#6c6c6c]">Height (In ms)</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} className=" text-gray-900 text-normal rounded-lg block w-full p-2.5 border border-[#c2c2c2] " placeholder="Enter your height" required/>
                </div>

                <div className="mb-6">
                    <label for="password" className="block mb-2 text-normal font-medium text-[#6c6c6c]">Weight (In kilograms)</label>
                    <input value={weight} onChange={(event) => setWeight(event.target.value)} className="text-gray-900 text-normal rounded-lg block w-full p-2.5 border border-[#c2c2c2]"  placeholder="Enter your weight" required/>
                </div>
        
                <div className='flex'>
                    <button type='submit' className='px-8 py-3 rounded-md bg-[#2828af] text-white text-base md:text-[14px] font-semibold mr-3'>Submit</button>
                    <button type='submit' className='flex justify-between items-center text-[#525252] font-medium text-base bg-transparent px-6 gap-2 mr-5 rounded-md border border-[#3b3bc7]' onClick={reload}>Reload</button>
                </div>
            </form>

            <div className='center mt-5'>
                <h3 className='text-[1.2rem] text-[#606060] font-medium'>Your BMI is: {bmi}</h3>
                <p className='text-[1.2rem] text-[#606060] font-medium'>{message}</p>
            </div>
        </div>

        <div className='hidden md:block md:pl-16 md:basis-1/2'>
            <div>
                <img src={bmibanner}  />
            </div>
        </div>

       
    </div>
  )
}

export default Formbmi

