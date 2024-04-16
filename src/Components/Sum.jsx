import React from 'react'

function Sum(props) {
  return (
    <div className='md:w-1/2 m-auto'>
        <div className='flex p-4 items-center justify-between bg-orange-200 rounded-md'>
           <p className='text-2xl'>Sum</p>
           <p className='text-2xl'>{props.sum}</p>
        </div>
    </div>
  )
}

export default Sum