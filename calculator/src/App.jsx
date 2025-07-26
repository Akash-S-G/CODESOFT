import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// const operators = ['.', '-', '*', '/', '%']
function App() {

  const [input, setinput] = useState('')
  // const [disvalue,setdisvalue] =useState('')
  const handleClick = (value)=>{
    setinput((prev)=>prev+value)
  }
  const handleEval= ()=>{
    try{

      setinput(eval(input.toString()))
    }
    catch(error)
    {
      console.error(error)
    }
  }
  const handleClear = ()=>{
      setinput('')
  }

  let count = 0
  return (
    <>

      
      <div className='flex items-center justify-center  w-full '>
        <div className="shadow-lg p-5 bg-gray-400 rounded">
          <input type="text" readOnly className='bg-gray-200 border-2 rounded p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ' placeholder='SIMPLE CALCULATOR' onChange={setinput} value={input} id='input' />

          <div className='grid grid-cols-3 gap-2 mt-5 col h-full'>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((i, index) => (

              <button key={index} className='p-3 border-2 cursor-pointer hover:animate-pulse font-bold bg-amber-200' onClick={()=>handleClick(i.toString())} >{i}</button>

            ))}
            <button className='p-3 border-2 w-full col-span-2 font-bold cursor-pointer hover:animate-bounce bg-blue-400'onClick={handleEval} >=</button>

            {
              ['.', '-', '*', '/', '%','+'].map((i, index) => {
              return  <button key={index} className='p-3 border-2 font-bold cursor-pointer hover:animate-ping bg-orange-300'onClick={()=>handleClick(i)} >{i}</button>
              })
            }
            <button className='p-3 border-2 w-full col-span-3 font-bold cursor-pointer hover:animate-bounce bg-red-400'onClick={handleClear} >Clear</button>

          </div >
        </div>
      </div>
    </>
  )
}

export default App
