import React from 'react'

function Reset(props) {
  const handelReset = props.reset
    
  return (
    <div className='flex items-center justify-center mt-5 mb-4'>
        <button className='bg-red-600 px-4 py-1 text-center text-white '
            onClick={handelReset}>Reset</button>
    </div>
  )
}

export default Reset