import React from 'react'

const Pagination = ({setPage,page}) => {
  return (
    <div className='pagination'>
        <button onClick={()=>{setPage((pre)=>pre>0?pre-1:0)}}>previous</button>
        <p>{page}</p>
        <button onClick={()=>{setPage((pre)=>pre+1)}}>Next</button>
      
    </div>
  )
}

export default Pagination
