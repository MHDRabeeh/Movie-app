import axios from "axios";
import { useEffect, useState } from "react"


export const useFetch = (url,customParams={})=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState();
    const [isError,setIsError]=useState();
    const options = {
        method:"get",
        baseURL:"https://api.themoviedb.org/3/",
        url:url,
        params:{
            api_key:import.meta.env.VITE_API_KEY,
            ...customParams
        }

    }
    const {page}= customParams
   
    
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios(options)
                setData(response.data.results);
                  setLoading(false)
            } catch (error) {
                setIsError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    },[page])

    return[data,loading,isError];

}