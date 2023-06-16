import React from 'react'
import { useParams } from 'react-router-dom'



function MovieInfo() {
  const {id} = useParams()

  return (
    <div>
        <h1>
         {id}
        </h1>
    </div>
  )
}

export default MovieInfo