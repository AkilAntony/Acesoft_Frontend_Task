import React, { useState } from 'react'
import { useContext } from 'react';
 
function Counter(props) {
 
 const counter = props.counter;
 const setCounter = props.setCounter
  const counterName = props.name;
  const[warning,setWarning] = useState('')
  const handleIncrement = ()=>{
    if(props.counter <10){
      setCounter(counter+1)
      props.updateSum(1)
    }else{
      setWarning(`${counterName} has reached the maximum value 10`)
    }
  }
  const handelDecrement = ()=>{
    if(counter>0)  {
      setCounter(counter-1)
      props.updateSum(-1)
    }
  }
  return (
    <div className='m-auto md:w-1/2'>
      <div className='flex items-center justify-between mt-10 p-10 border
             border-slate-950 rounded-lg '>
         <p className='text-2xl rounded '>{counterName}</p>
        <button className='text-2xl bg-amber-500 px-4 rounded-sm text-white py-1' 
            onClick={handelDecrement}>-</button>
        <p className='text-2xl rounded '>{counter}</p>
        <button className='text-2xl bg-green-500 px-4 rounded-sm text-white py-1' 
            onClick={handleIncrement}>+</button>
      </div>
       <div>
         {warning ?<p>{warning}</p> : '' }
       </div>
    </div>
  )
}

export default Counter