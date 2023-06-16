import React, { useState } from 'react'
import Slider from '../Components/Slider'
import Wrapper from '../Components/Wrapper';
import  PropagateLoader  from 'react-spinners/PropagateLoader';
import ErrorMessage from '../Components/ErrorMessage';
import MovieCard from '../Components/MovieCard';
import Pagination from '../Components/Pagination';
import { useFetch } from '../Hooks/useFetch';
  

const Home = () => {
  const [page, setPage] = useState(1);
  const [data,loading,isError]= useFetch("movie/popular",{page:page});
  return (
    <>

<Slider/>
            <Wrapper>
                <h2 className="sectionTitle">Popular Movies</h2>
                {loading && <PropagateLoader color="#feae44"/>}
                {isError && <ErrorMessage>{isError}</ErrorMessage>}

                {
                    !isError && !loading && (
                        <>
                            <div className="gallery">
                                {
                                    data.map((movie) => {
                                        return (
                                            <MovieCard key={movie.id} movie={movie} />
                                        )
                                    })
                                }
                            </div>
                            <Pagination page={page} setPage={setPage} />
                        </>
                    )
                }
            </Wrapper>
    </>
  )
}

export default Home
