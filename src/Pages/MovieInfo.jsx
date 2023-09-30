import React from 'react'
import {  useParams } from 'react-router-dom'
import Wrapper from '../Components/Wrapper'
import { useFetch } from '../Hooks/useFetch'


function MovieInfo() {
  const { id } = useParams()
  console.log({id});
  const [data] = useFetch(`movie/${id}`); 
  console.log(data);

  return (
    <div className='moviePage'>
      <Wrapper>
        <div className='movieContent'>
          <div className='moviePoster'>
            {/* <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" /> */}
          </div>
          <div className='movieInfo'>
            <div className='movieTitle'>
              <h1>Title</h1>
              <h3>Tagline</h3>
            </div>
            <div className='moviePlot'>
            movie plot
            </div>
            <div className="movieDetails">
              <div className="movieDetailsItem">
                <h3>item</h3>
                <div>a</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default MovieInfo
