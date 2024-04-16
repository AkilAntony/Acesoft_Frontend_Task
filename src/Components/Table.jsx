import React from 'react'

function Table({data,delay}) {
     
     const fetchedData=data;
  
     console.log(fetchedData)
  return (
    <div>
        {
            delay ?
            <div>
                <div className='mt-5 mb-3 flex justify-end'>
                    <button className='text-white bg-indigo-600 px-19 py-1'>Refresh</button>
                </div>
        
                <table className='border border-gray-800 '>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                     </thead>
                     <tbody className='border border-gray-950'>
                        {fetchedData.map((val,index)=>(
                            <tr key={index} className='border border-gray-950'>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> : <div className='flex flex-col items-center justify-center'>
                <p>Loading...</p>
            </div>
        }
        
    </div>
  )
}

export default Table