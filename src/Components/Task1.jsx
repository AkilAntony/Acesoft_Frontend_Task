import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Table'
import { useFetch } from '../Hooks/UseFetch'

function Task1() {
    // const [data,setData] = useState();
    const [delay, setDelay] =useState(false)
    const {data,loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
    useEffect(()=>{
        setTimeout(()=>{
         setDelay(true)
        },2000)
    },[])
  return (
    <div>
         {/* {!loading && 
            <div>
                <p>Loading...</p>
            </div>
         } */}
         {error & <p>Check you API</p>}
       <Table data = {data} delay={delay}/>
    </div>
  )
}

export default Task1