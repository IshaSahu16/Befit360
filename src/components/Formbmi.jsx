import React from 'react'

const Formbmi = () => {
  return (

    <div>

    <form>
        <div class="mb-6">
             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-black">Height (In cms)</label>
             <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your height" required/>
         </div>

        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-black">Weight (In kilograms)</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   placeholder="Enter your weight" required/>
        </div>
        
        <div className='flex'>
            <button className='flex justify-between items-center bg-transparent px-6 gap-2 mr-5 rounded-md border border-[#2929ab]'>Reload</button>
            <button className='px-8 py-3 rounded-md bg-[#2929ab] text-white text-sm md:text-[14px] font-semibold mr-3'>Submit</button>
          </div>
    </form>
    </div>
  )
}

export default Formbmi



// import React, {useState} from 'react'
 
// function App() {
 
//   // state
//   const [weight, setWeight] = useState(0)
//   const [height, setHeight] = useState(0)
//   const [bmi, setBmi] = useState('')
//   const [message, setMessage] = useState('')
 
//   let calcBmi = (event) => {
//     //prevent submitting to the server
//     event.preventDefault()
 
//     if (weight === 0 || height === 0) {
//       alert('Please enter a valid weight and height')
//     } else {
//       let bmi = (weight / (height * height) * 703)
//       setBmi(bmi.toFixed(1))
 
//       // Logic for message
 
//       if (bmi < 25) {
//         setMessage('You are underweight')
//       } else if (bmi >= 25 && bmi < 30) {
//         setMessage('You are a healthy weight')
//       } else {
//         setMessage('You are overweight')
//       }
//     }
//   }
 
 
//   let reload = () => {
//     window.location.reload()
//   }
 
//   return (
//     <div className="app">
//     <div className='container'>
//       <h2 className='center'>BMI Calculator</h2>
//       <form onSubmit={calcBmi}>
 
//         <div>
//           <label>Weight (lbs)</label>
//           <input value={weight} onChange={(e) => setWeight(e.target.value)} />
//         </div>
 
//         <div>
//           <label>Height (in)</label>
//           <input value={height} onChange={(event) => setHeight(event.target.value)} />
//         </div>
 
//         <div>
//           <button className='btn' type='submit'>Submit</button>
//           <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
//         </div>
//       </form>
 
//       <div className='center'>
//         <h3>Your BMI is: {bmi}</h3>
//         <p>{message}</p>
//       </div>
//     </div>
//   </div>
//   );
// }
 
// export default App;

