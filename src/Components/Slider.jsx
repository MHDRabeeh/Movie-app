import React, { useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import { useFetch } from '../Hooks/useFetch';

const Slider = () => {
    const [data]=useFetch("movie/popular") 
    let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        padding: "15vw",
        breakpoints: {
            640: {
                heightRatio: 0.54,
                arrows: false,
                pagination: true,
                padding: "0",
            },
        },
    };
    return (
        <div className="movieSlider">
            <Splide options={splideOptions}>
                {
                    data.results.map((item) => {

                        return (<SplideSlide key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} className="moviePoster" />
                            <div className='slideCaption'><h2>{item.title}</h2></div>
                        </SplideSlide>)
                    })
                }

            </Splide>
        </div>
    )
}

export default Slider
