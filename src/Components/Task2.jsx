import React,{useState} from 'react'
import Counter from './Counter'
import Reset from './Reset'
import Sum from './Sum'
 

function Task2() {
  const [counter1,setCounter1] = useState(0);
  const [counter2,setCounter2] = useState(0);
  const [counter3,setCounter3] = useState(0);
  const [counter4,setCounter4] = useState(0);
  const [sum,setSum] = useState(0);
  
  const updateSum = (data)=>{
        setSum(sum+data)
      }
  
  const handelReset = ()=>{
    setCounter1(0);
    setCounter2(0);
    setCounter3(0);
    setCounter4(0);
    setSum(0)
  }
   
  return (
    <div className='m-2'>
        <p className='text-3xl text-center'>Page Title</p>
        <Counter name='counter1' updateSum = {updateSum} counter = {counter1} setCounter = {setCounter1}/>
        <Counter name='counter2' updateSum = {updateSum} counter = {counter2} setCounter = {setCounter2}/>
        <Counter name='counter3' updateSum = {updateSum} counter = {counter3} setCounter = {setCounter3}/>
        <Counter name='counter3' updateSum = {updateSum} counter = {counter4} setCounter = {setCounter4}/>
        <Reset reset = {handelReset}/>
        <Sum sum={sum}/>
        </div>
  )
}

export default Task2